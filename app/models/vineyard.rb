class Vineyard < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :wines_available, presence: true
  validates :region_location, presence: true

  belongs_to :region
  has_many :cellars
end


