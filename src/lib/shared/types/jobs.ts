import type { IUser } from '$lib/shared/types/user'
import type { Schema } from 'mongoose'

export interface IJob {
  _id: string
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  creator: Schema.Types.ObjectId
  jobTakers: Schema.Types.ObjectId[]
}

export interface IJobPopulated {
  _id: string
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  creator: IUser
  jobTakers: IUser[]
}

export interface ICreateJobInput {
  name: string
  description: string
  creator?: string
}

export interface ITakeJobInput {
  jobTakerUserId?: string
  jobId: string
}
