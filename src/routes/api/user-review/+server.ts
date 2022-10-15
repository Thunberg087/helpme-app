import { createResponse } from '$lib/api/response'
import { getUserByRequest } from '$lib/api/services/auth'
import { createJob, getJobs } from '$lib/api/services/jobs'
import { createReview } from '$lib/api/services/userReview'
import type { GetJobsResponse } from '$lib/shared/responses/jobs'
import type { RequestEvent } from '@sveltejs/kit'

// export async function GET() {
//   const jobs = await getJobs()

//   return createResponse<GetJobsResponse>({ jobs }, 200)
// }

export async function POST({ request }: RequestEvent) {
  const data = await request.json()
  
  const user = await getUserByRequest(request)
  if (!user) return createResponse({ message: 'Unauthorized' }, 401)

  try {
    const review = await createReview({ ...data, creator: user._id })
    console.log('review', review)
    return createResponse({ message: 'Created review successfully' })
  } catch (error: any) {
    return createResponse(error, 400)
  }
}
