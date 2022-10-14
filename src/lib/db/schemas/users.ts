import { model, Schema } from 'mongoose'
import type { IUser } from '$lib/shared/types/user'

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    passHash: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
)

export const UserModel = model<IUser>('User', userSchema)
