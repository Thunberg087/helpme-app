import { createResponse } from '$lib/api/response'
import { login } from '$lib/api/services/user'
import type { ISession } from '$lib/db/schemas/session'
import type { MessageResponse } from '$lib/shared/responses'
import type { ISignupInput } from '$lib/shared/types/user'
import type { RequestEvent } from '@sveltejs/kit'
import { serialize } from 'cookie'

export async function POST({ request }: RequestEvent) {
  const userInput: ISignupInput = await request.json()

  try {
    const session: ISession = await login(userInput.email, userInput.password)

    const newCookie = serialize('session_id', session.id, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // one week
    })

    return createResponse<MessageResponse>({ message: 'Successfully signed in' }, 201, {
      'Set-Cookie': newCookie,
    })
  } catch (error: any) {
    return createResponse<MessageResponse>({ message: error.message }, 401)
  }
}
