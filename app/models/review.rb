class Review < ApplicationRecord
  validates :comment, length: { maximum: 500 }
  validates :varietal, presence: true
  validates :overall, presence: true

  belongs_to :user
  belongs_to :vineyard
end