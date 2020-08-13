class Api::V1::VineyardsController < ApplicationController
  def show
    render json: Vineyard.all
  end
end