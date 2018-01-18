class Movement < ApplicationRecord
  has_many :exercises, inverse_of: :movement
  accepts_nested_attributes_for :exercises, allow_destroy: true
end
