import { SessionModel } from '$lib/db/schemas/session'
import { v4 as uuidv4 } from 'uuid'

export const createSession = async (userId: string) => {
  const session = new SessionModel({
    id: uuidv4(),
    userId,
  })

  await session.save()
  return session
}

export const getSession = async (sessionId: string) => {
  const session = await SessionModel.findOne({ id: sessionId })
  return session
}

export const deleteSession = async (sessionId: string) => {
  await SessionModel.deleteOne({ id: sessionId })
}
