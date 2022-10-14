import { createResponse } from '$lib/api/response'
import { getUserByRequest } from '$lib/api/services/auth'
import { takeJob } from '$lib/api/services/jobs'
import type { RequestEvent } from '@sveltejs/kit'

export async function POST({ request }: RequestEvent) {
  const data = await request.json()

  const user = await getUserByRequest(request)
  if (!user) return createResponse({ message: 'Unauthorized' }, 401)

  try {
    await takeJob({ jobId: data.jobId, jobTakerUserId: user._id })

    return createResponse({ message: 'Job taken successfully' })
  } catch (error: any) {
    return createResponse(error, 400)
  }
}
