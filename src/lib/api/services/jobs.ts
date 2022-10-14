import { JobModel } from '$lib/db/schemas/jobs'
import type { ICreateJobInput, IJobPopulated } from '$lib/shared/types/jobs'
import type { IUser } from '$lib/shared/types/user'

export const getJobs = async () => {
  const jobs: IJobPopulated[] = await JobModel.find({}).populate<{ creator: IUser }>('creator').exec()
  return jobs
}

export const createJob = async (data: ICreateJobInput) => {
  const job = new JobModel({
    name: data.name,
    description: data.description,
    creator: data.creator,
  })

  await job.save()
}
