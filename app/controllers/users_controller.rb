class UsersController < ApplicationController

  def index
  end

  def show
  end


  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to user_path(current_user), notice: 'Updated your information'
    else
      render 'edit'
    end
  end

  def destroy
    current_user.destroy
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:username, :bio, :location, :age, :height, :weight, :avatar)
  end
end
