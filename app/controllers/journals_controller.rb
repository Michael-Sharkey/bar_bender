class JournalsController < ApplicationController
  def index
  end

  def new
    @journal = current_user.journals.new
  end

  def create
    @journal = current_user.journals.new(journal_params)
    @journal.user_id = current_user.id
    if @journal.save
      redirect_to current_user, notice: 'Success!'
    else
      render 'new', notice: 'Something Went Wrong'
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:id, :user_id, :title, :entry)
  end

end
