class Cellar < ApplicationRecord
  belongs_to :vineyard
  belongs_to :varietal
end