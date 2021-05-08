class RegionShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :position

  has_many :vineyards
  has_many :varietals, through: :vineyards
end