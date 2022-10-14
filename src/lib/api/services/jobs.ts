import { JobModel } from '$lib/api/db/schemas/jobs'
import type { ICreateJobInput, IJobPopulated, ITakeJobInput } from '$lib/shared/types/jobs'
import type { IUser } from '$lib/shared/types/user'

export const getJobs = async () => {
  const jobs: IJobPopulated[] = await JobModel.find({}).populate<{ creator: IUser }>('creator').populate<{ jobTakers: IUser[] }>('jobTakers').exec()
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

export const takeJob = async (data: ITakeJobInput) => {
  await JobModel.findByIdAndUpdate(data.jobId, { $addToSet: { jobTakers: data.jobTakerUserId } }).exec()
}
