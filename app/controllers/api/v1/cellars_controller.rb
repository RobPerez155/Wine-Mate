class Api::V1::CellarsController < ApplicationController
  def show
    render json: Cellar.all
  end
end