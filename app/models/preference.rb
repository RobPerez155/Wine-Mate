class Preference < ApplicationRecord
  belongs_to :varietal
  belongs_to :user
end