import { signup } from '$lib/api/services/user'
import type { ISignupInput } from '$lib/shared/types/user'
import type { RequestEvent } from '@sveltejs/kit'

export async function POST({ request }: RequestEvent) {
  const user: ISignupInput = await request.json()

  try {
    await signup(user.email, user.fullname, user.password)
    return new Response(JSON.stringify({ msg: 'Account created' }), { status: 201 })
  } catch (error: any) {
    if (error.code === '11000') {
      return new Response(JSON.stringify({ msg: 'Email already in use' }), { status: 409 })
    }

    return new Response(JSON.stringify({ msg: 'Something went wrong' }), { status: 500 })
  }
}
