class Workout < ApplicationRecord
  # properties
  belongs_to :user, optional: true
  has_many :worksets, inverse_of: :workout, dependent: :destroy
  has_many :exercises, through: :worksets
  has_many :movements, through: :worksets
  accepts_nested_attributes_for :worksets, allow_destroy: true

  before_save do |workout|
    workout.date.iso8601
  end

  # methods
  def self.most_recent(integer)
    order(created_at: :desc).limit(integer).to_json(include: :worksets)
  end

end
