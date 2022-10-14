import { redirect, type LoadEvent } from '@sveltejs/kit'

export async function load({ parent }: LoadEvent) {
  const { user } = await parent()
  
  if (user) {
    throw redirect(302, '/home')
  }

  return {}
}
