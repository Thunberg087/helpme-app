import { createResponse } from '$lib/api/response'
import { getUserByRequest } from '$lib/api/services/auth'
import { removeSearchJob, takeJob } from '$lib/api/services/jobs'
import type { RequestEvent } from '@sveltejs/kit'

export async function POST({ request }: RequestEvent) {
  const data = await request.json()

  const user = await getUserByRequest(request)
  if (!user) return createResponse({ message: 'Unauthorized' }, 401)

  try {
    await removeSearchJob({ jobId: data.jobId, userId: user._id })

    return createResponse({ message: 'Job unsearched successfully' })
  } catch (error: any) {
    return createResponse(error, 400)
  }
}
