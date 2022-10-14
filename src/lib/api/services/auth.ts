import { createSession, deleteSession, getSession } from '$lib/api/services/session'
import { getMongoConnection } from '$lib/db/mongo'
import { UserModel } from '$lib/db/schemas/users'
import type { IUser } from '$lib/shared/types/user'
import bcrypt from 'bcryptjs'
import cookie from 'cookie'

getMongoConnection()

export const getUserByRequest = async (request: Request): Promise<undefined | IUser> => {
  const cookies = request.headers.get('cookie')
  if (!cookies) return undefined

  const sessionId = cookie.parse(cookies).session_id
  if (!sessionId) return undefined

  const session = await getSession(sessionId)
  const user = await UserModel.findById(session?.userId)

  if (!user) return undefined

  user.passHash = undefined

  return user
}

export const signup = async (email: string, fullname: string, password: string) => {
  const passHash = await bcrypt.hash(password, 10)

  const user = new UserModel({
    email,
    fullname,
    passHash,
  })

  await user.save()
}

export const login = async (email: string, password: string) => {
  let user = await UserModel.findOne({ email })
  if (!user) throw new Error('User not found')

  if (!user.passHash) throw new Error('Incorrect password')

  const isMatch = await bcrypt.compare(password, user.passHash)
  if (!isMatch) throw new Error('Incorrect password')

  user.passHash = undefined

  const session = createSession(user._id)

  return session
}

export const logout = async (sessionId: string) => {
  await deleteSession(sessionId)
}
