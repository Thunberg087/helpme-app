import { JobModel, type IJob } from '$lib/db/schemas/job'
import type { RequestEvent } from '@sveltejs/kit'

export function GET(event: RequestEvent) {
  const jobs: IJob[] = []

  return jobs
}

export async function POST({ request }: RequestEvent) {
  const data = await request.json()

  try {
    const job = new JobModel({
      name: data.name,
      description: data.description,
    })

    await job.save()

    return new Response('Created job successfully')
  } catch (error: any) {
    return new Response(error, { status: 400 })
  }
}
