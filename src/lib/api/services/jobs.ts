import { JobApplicantModel } from '$lib/api/db/schemas/jobApplicants'
import { JobModel } from '$lib/api/db/schemas/jobs'
import type { ICreateJobInput, IJob, IJobPopulated, IRemoveSearchedJobInput, ITakeJobInput } from '$lib/shared/types/jobs'
import type { IUser } from '$lib/shared/types/user'

export const getJobs = async (userId?: string) => {
  const jobs: IJobPopulated[] = await JobModel.find({ creator: { $ne: userId } })
    .populate<{ creator: IUser }>('creator')
    .exec()

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
  const jobApplicant = new JobApplicantModel({
    job: data.jobId,
    user: data.jobTakerUserId,
  })

  await jobApplicant.save()
}

export const removeSearchJob = async (data: IRemoveSearchedJobInput) => {
  await JobApplicantModel.find({ job: data.jobId, user: data.userId }).remove().exec()
}

export const getMyJobs = async (userId: string) => {
  const jobs: IJobPopulated[] = await JobModel.find({ creator: userId }).populate<{ creator: IUser }>('creator').exec()
  return jobs
}

export const getMySearchedJobs = async (userId: string) => {
  const jobs = await JobApplicantModel.find({ userId: userId })
    .populate<{ job: IJob }>({
      path: 'job',
      populate: {
        path: 'creator',
      },
    })
    .exec()

  const mappedJobs = jobs.map((job) => job.job)

  return mappedJobs
}
