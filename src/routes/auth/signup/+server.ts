import { createResponse } from '$lib/api/response'
import { signup } from '$lib/api/services/auth'
import type { MessageResponse } from '$lib/shared/responses'
import type { ISignupInput } from '$lib/shared/types/user'
import type { RequestEvent } from '@sveltejs/kit'

export async function POST({ request }: RequestEvent) {
  const user: ISignupInput = await request.json()

  try {
    await signup(user.email, user.fullname, user.password)

    return createResponse<MessageResponse>({ message: 'Account created' }, 201)
  } catch (error: any) {
    if (error.code === 11000) {
      return createResponse<MessageResponse>({ message: 'Email already in use' }, 409)
    }

    return createResponse<MessageResponse>({ message: 'Something went wrong' }, 500)
  }
}
