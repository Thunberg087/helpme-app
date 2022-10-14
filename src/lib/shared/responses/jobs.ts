import type { IJobPopulated } from '$lib/shared/types/jobs'

export interface GetJobsResponse {
  jobs: IJobPopulated[]
}
