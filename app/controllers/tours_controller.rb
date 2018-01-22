class ToursController < ApplicationController
  skip_before_action :authenticate_user!

  def slides
    @meals = User.first.meals.to_slide_info
    respond_to do |format|
      format.html
      format.json { render json: @meals }
    end
  end

  def notes
    @user = User.first
  end

  def show
    @user = User.first
  end

  def workout
  end

  def eat
  end

  def note
  end
end
