import { UserReviewModel, type IUserReview } from '$lib/api/db/schemas/userReviews'

export const createReview = async (review: IUserReview) => {
  const userReview = new UserReviewModel(review)
  await userReview.save()
}
