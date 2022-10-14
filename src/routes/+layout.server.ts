import { getUserBySessionId } from '$lib/api/services/user'
import type { RequestEvent } from '@sveltejs/kit'
import cookie from 'cookie'

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request }: RequestEvent) {
  const cookies = request.headers.get('cookie')
  if (!cookies) return {}

  const sessionId = cookie.parse(cookies).session_id
  if (!sessionId) return {}

  const user = await getUserBySessionId(sessionId)
  if (!user) return {}

  return {
    user: JSON.stringify(user),
  }
}
