# frozen_string_literal: true

module Admin
  class ModelsController < ApplicationController
    before_action :set_model, only: [:show, :edit, :update, :destroy]

    def index
      @models = Model.all
    end

    def show
    end

    def new
      @model = Model.new
    end

    def create
      @model = Model.new(model_params)
      if @model.save
        redirect_to admin_model_path(@model), notice: 'Model created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @model.update(model_params)
        redirect_to admin_model_path(@model), notice: 'Model updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @model.destroy
      redirect_to admin_models_path, notice: 'Model deleted successfully.'
    end

    private

    def set_model
      @model = Model.find(params[:id])
    end

    def model_params
      params.require(:model).permit(:name, :country_id)
    end
  end
end
