class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    if current_user.nil?
      render json: { notice: "Please login before submitting a review." }
    else
      review = Review.new(review_params)
      review.vineyard_id = params["vineyard_id"]
      review.user_id = current_user.id
      review.username = current_user.username

      if review.save 
        render json: { reviewData: review, notice: "Review submitted successfully!" }
      else
        render json: { reviewData: review, notice: "Error: #{review.errors.full_messages.to_sentence}" }
      end
    end
  end

  private
  def review_params
    params.require(:review).permit(:overall, :varietal, :comment)
  end
end