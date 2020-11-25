class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating

  belongs_to :genre
end
