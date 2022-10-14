import type { IUser } from '$lib/shared/types/user'
import { model, Schema } from 'mongoose'

export interface IUserReview {
  id: string
  rating: number
  reviewUser: Schema.Types.ObjectId
  job: Schema.Types.ObjectId
  creator?: Schema.Types.ObjectId
  comment?: string
}

export interface IUserReviewPopulated {
  id: string
  rating: number
  reviewUser: IUser
  creator: IUser
  comment?: string
}

const userReviewSchema = new Schema<IUserReview>(
  {
    reviewUser: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    job: { type: Schema.Types.ObjectId, required: true, ref: 'Job' },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    rating: { type: Number, required: true, min: 0, max: 5 },
    comment: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)

export const UserReviewModel = model<IUserReview>('UserReview', userReviewSchema)
