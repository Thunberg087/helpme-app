import { model, Schema } from 'mongoose'

export interface ISession {
  id: string
  userId: string
}

const sessionSchema = new Schema<ISession>({
  id: { type: String, required: true },
  userId: { type: String, required: true },
})

export const SessionModel = model<ISession>('Session', sessionSchema)
