import { model, Schema } from 'mongoose'

export interface ISession {
  id: string
  userId: string
}

const sessionSchema = new Schema<ISession>(
  {
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const SessionModel = model<ISession>('Session', sessionSchema)
