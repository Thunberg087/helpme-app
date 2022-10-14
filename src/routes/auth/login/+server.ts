import { login } from '$lib/api/services/user'
import type { ISession } from '$lib/db/schemas/session'
import type { ISignupInput, IUser } from '$lib/shared/types/user'
import type { RequestEvent } from '@sveltejs/kit'
import { serialize } from 'cookie'

export async function POST({ request }: RequestEvent) {
  const userInput: ISignupInput = await request.json()

  try {
    const session: ISession = await login(userInput.email, userInput.password)

    return new Response(
      JSON.stringify({
        message: 'Successfully signed in',
      }),
      {
        status: 200,
        headers: {
          'Set-Cookie': serialize('session_id', session.id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // one week
          }),
        },
      }
    )
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 401 })
  }
}
