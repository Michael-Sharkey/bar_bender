class WorkoutsController < ApplicationController

  def new
    @workout = current_user.workouts.new
    @workout.worksets.new
  end

  def create
    @workout = current_user.workouts.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      redirect_to current_user, notice: 'Success!'
    else
      render 'new', notice: 'Something Went Wrong'
    end
  end

  private

  def workout_params
    params.require(:workout).permit(:id, :date, :user_id, '_destroy', worksets_attributes: [:id, :workout_id, :movement_id, :exercise_id, :weight, :reps, :rpe, '_destroy'])
  end



end
