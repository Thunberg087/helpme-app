import { getUserByRequest } from '$lib/api/services/auth'
import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request }: RequestEvent) {
  const user = await getUserByRequest(request)
  
  if (!user) return {}

  return {
    user: JSON.stringify(user),
  }
}
