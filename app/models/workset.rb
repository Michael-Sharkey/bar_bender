class Workset < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :workout, optional: true
  belongs_to :exercise, optional: true
  belongs_to :movement, optional: true

  validates :weight, numericality: { only_integer: true }, presence: true
  validates :reps, numericality: { only_integer: true }, presence: true
  validates :rpe, numericality: { only_integer: true, less_than_or_equal_to: 10 }, allow_blank: true

  def self.daily_maxes
    where(daily_max: true).joins(:workout, :exercise).select('exercises.name, worksets.weight, worksets.reps, worksets.rpe, workouts.date').to_json
  end

  def self.cumulative_volume
    order(:movement_id, :exercise_id, created_at: :desc).to_json
  end

  def self.rep_ranges
    order(:movement_id, :exercise_id).to_json
  end

end
