class Api::V1::VineyardsController < ApplicationController
  def show
    @vineyard = Vineyard.find(params[:id])
    @reviews = @vineyard.reviews
    @varietals = @vineyard.varietals
    render json: { vineyardData: @vineyard, reviewsData: @reviews, varietalsData: @varietals }
  end

  def create
     if current_user.nil?
       render json: { notice: "Please login before submitting a vineyard." }
     else
       vineyard = Vineyard.new(vineyard_params)
       vineyard.vineyard_id = params["vineyard_id"]
       vineyard.user_id = current_user.id
       vineyard.username = current_user.username
  
       if review.save 
         render json: { vineyardData: vineyard, notice: "Vineyard submitted successfully!" }
       else
         render json: { vineyardData: vineyard, notice: "Error: #{vineyard.errors.full_messages.to_sentence}" }
       end
     end
   end
  
  private
   def vineyard_params
    params.require(:vineyard).permit(:name, :address, :wines_available, :region_id)
   end
  end
end