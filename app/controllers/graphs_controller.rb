class GraphsController < ApplicationController
  def volume
  @patterns = current_user.worksets.cumulative_volume

  respond_to do |format|
    format.html
    format.json { render json: @patterns }
  end
end

def intensity
  @maxes = current_user.worksets.daily_maxes

  respond_to do |format|
    format.html
    format.json { render json: @maxes }
  end
end

def rep_ranges
  @sets = current_user.worksets.rep_ranges

  respond_to do |format|
    format.html
    format.json { render json: @sets }
  end
end

end
