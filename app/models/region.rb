class Region < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :description, presence: true

  has_many :vineyards
end