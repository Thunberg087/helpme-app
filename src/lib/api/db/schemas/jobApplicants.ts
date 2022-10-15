import type { IJobApplicant } from '$lib/shared/types/jobApplicants'
import { model, Schema } from 'mongoose'

const jobApplicantSchema = new Schema<IJobApplicant>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    job: { type: Schema.Types.ObjectId, required: true, ref: 'Job' },
  },
  {
    timestamps: true,
  }
)

jobApplicantSchema.index({ user: 1, job: 1 }, { unique: true })

export const JobApplicantModel = model<IJobApplicant>('JobApplicant', jobApplicantSchema)
