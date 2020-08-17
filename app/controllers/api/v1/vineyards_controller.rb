class Api::V1::VineyardsController < ApplicationController
  def show
    @vineyard = Vineyard.find(params[:id])
    @reviews = @vineyard.reviews
    @varietals = @vineyard.varietals
    render json: { vineyardData: @vineyard, reviewsData: @reviews, varietalsData: @varietals }
  end
end