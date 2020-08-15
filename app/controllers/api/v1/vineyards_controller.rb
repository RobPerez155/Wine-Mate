class Api::V1::VineyardsController < ApplicationController
  def show
    @vineyard = Vineyard.find(params[:id])
    @reviews = @vineyard.reviews
    @cellars = @vineyard.cellars
    render json: { vineyardData: @vineyard, reviewsData: @reviews, cellarData: @cellars }
  end
end