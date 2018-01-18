class Journal < ApplicationRecord
  belongs_to :user, optional: true
  validates :title, presence: true
  validates :entry, presence: true
end
