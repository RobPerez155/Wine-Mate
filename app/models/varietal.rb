class Varietal < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :cellars
  has_many :preferences
end