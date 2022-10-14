import { logout } from '$lib/api/services/user'
import type { RequestEvent } from '@sveltejs/kit'
import cookie from 'cookie'

export async function DELETE({ request }: RequestEvent) {
  const cookies = request.headers.get('cookie')
  if (!cookies) return {}

  const sessionId = cookie.parse(cookies).session_id
  if (!sessionId) return {}

  try {
    await logout(sessionId)

    return new Response(
      JSON.stringify({
        message: 'Successfully logged out',
      })
    )
  } catch (error: any) {
    return new Response(error, { status: 401 })
  }
}
