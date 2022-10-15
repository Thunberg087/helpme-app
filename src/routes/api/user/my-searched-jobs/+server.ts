import { createResponse } from '$lib/api/response'
import { getUserByRequest } from '$lib/api/services/auth'
import { getMySearchedJobs } from '$lib/api/services/jobs'
import type { GetJobsResponse } from '$lib/shared/responses/jobs'
import type { RequestEvent } from '@sveltejs/kit'

export async function GET({ request }: RequestEvent) {
  const user = await getUserByRequest(request)
  if (!user) return createResponse({ message: 'Unauthorized' }, 401)
  
  const jobs = await getMySearchedJobs(user._id)

  return createResponse<GetJobsResponse>({ jobs }, 200)
}


