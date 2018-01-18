class CreateWorksets < ActiveRecord::Migration[5.2]
  def change
    create_table :worksets do |t|
      t.integer :workout_id
      t.integer :movement_id
      t.integer :exercise_id

      t.integer :weight
      t.integer :reps
      t.integer :rpe
      t.boolean :daily_max

      t.timestamps
    end
  end
end
