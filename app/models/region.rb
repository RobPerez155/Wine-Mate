class Region < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :description, presence: true

  has_many :vineyards
  has_many :varietals, through: :vineyards
end