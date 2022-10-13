import { Job, type IJob } from '$lib/db/schemas/job'
import type { MaybePromise } from '@sveltejs/kit/types/private'
import type { RequestEvent, RequestHandler } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET() {
  const jobs: IJob[] = []

  return jobs
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: RequestEvent) {
  const data = await request.json()

  try {
    const job = new Job({
      name: data.name,
      description: data.description,
    })

    await job.save()

    return new Response('Created job successfully')
  } catch (error: any) {
    return new Response(error, { status: 400 })
  }
}
