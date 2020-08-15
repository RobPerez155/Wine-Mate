class Api::V1::VineyardsController < ApplicationController
  def show
    @vineyard = Vineyard.find(params[:id])
    @reviews = @vineyard.reviews
    render json: { vineyardData: @vineyard, reviewsData: @reviews }
  end
end