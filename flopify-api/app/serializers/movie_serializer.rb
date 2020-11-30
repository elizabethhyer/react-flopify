class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :genre_id

  belongs_to :genre
end
