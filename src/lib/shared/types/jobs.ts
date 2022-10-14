import type { IUser } from '$lib/shared/types/user'
import type { Schema } from 'mongoose'

export interface IJob {
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  creator: Schema.Types.ObjectId
}

export interface IJobPopulated {
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  creator: IUser
}

export interface ICreateJobInput {
  name: string
  description: string
  creator?: string
}
