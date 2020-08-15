class Api::V1::VarietalsController < ApplicationController
  def index
    render json: Varietal.all
  end
end