import { model, Schema } from 'mongoose'

export interface IJob {
  name: string
  description: string
}

const jobSchema = new Schema<IJob>({
  name: { type: String, required: true },
  description: { type: String, required: true },
})

export const Job = model<IJob>('Job', jobSchema)
