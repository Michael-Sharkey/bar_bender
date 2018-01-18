class MealsController < ApplicationController

  def index
    @meal = Meal.first
  end


  def slides
    @meals = current_user.meals.to_slide_info
    respond_to do |format|
      format.html
      format.json { render json: @meals }
    end
  end

  def show
  end

  def new
    @meal = current_user.meals.new
  end

  def create
    @meal = Meal.new(meal_params)
    @meal.user_id = current_user.id
    if @meal.save
      redirect_to current_user, notice: 'Success!'
    else
      render 'new', notice: 'Something Went Wrong'
    end
  end

  private

  def meal_params
    params.require(:meal).permit(:id, :user_id, :photo, :good, '_destroy')
  end
end
