import { createResponse } from '$lib/api/response'
import { getUserByRequest } from '$lib/api/services/auth'
import { createJob, getJobs } from '$lib/api/services/jobs'
import type { GetJobsResponse } from '$lib/shared/responses/jobs'
import type { RequestEvent } from '@sveltejs/kit'

export async function GET({ request }: RequestEvent) {
  const user = await getUserByRequest(request)

  const jobs = await getJobs(user?._id)

  return createResponse<GetJobsResponse>({ jobs }, 200)
}

export async function POST({ request }: RequestEvent) {
  const data = await request.json()

  const user = await getUserByRequest(request)

  if (!user) return createResponse({ message: 'Unauthorized' }, 401)

  try {
    await createJob({ ...data, creator: user._id })

    return createResponse({ message: 'Created job successfully' })
  } catch (error: any) {
    return createResponse(error, 400)
  }
}
