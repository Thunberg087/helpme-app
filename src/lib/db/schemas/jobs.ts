import type { IJob } from '$lib/shared/types/jobs'
import { model, Schema } from 'mongoose'

const jobSchema = new Schema<IJob>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

export const JobModel = model<IJob>('Job', jobSchema)
