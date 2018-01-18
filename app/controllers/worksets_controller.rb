class WorksetsController < ApplicationController
  before_action :set_workset, only: [:show, :edit, :update, :destroy]

  # GET /worksets
  # GET /worksets.json
  def index
    @worksets = Workset.all
  end

  # GET /worksets/1
  # GET /worksets/1.json
  def show
  end

  # GET /worksets/new
  def new
    @workset = Workset.new
  end

  # GET /worksets/1/edit
  def edit
  end

  # POST /worksets
  # POST /worksets.json
  def create
    @workset = Workset.new(workset_params)

    respond_to do |format|
      if @workset.save
        format.html { redirect_to @workset, notice: 'Workset was successfully created.' }
        format.json { render :show, status: :created, location: @workset }
      else
        format.html { render :new }
        format.json { render json: @workset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /worksets/1
  # PATCH/PUT /worksets/1.json
  def update
    respond_to do |format|
      if @workset.update(workset_params)
        format.html { redirect_to @workset, notice: 'Workset was successfully updated.' }
        format.json { render :show, status: :ok, location: @workset }
      else
        format.html { render :edit }
        format.json { render json: @workset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /worksets/1
  # DELETE /worksets/1.json
  def destroy
    @workset.destroy
    respond_to do |format|
      format.html { redirect_to worksets_url, notice: 'Workset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workset
      @workset = Workset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def workset_params
      params.fetch(:workset, {})
    end
end
