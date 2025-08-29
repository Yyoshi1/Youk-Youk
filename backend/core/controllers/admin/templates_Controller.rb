# frozen_string_literal: true

module Admin
  class TemplatesController < ApplicationController
    before_action :set_template, only: [:show, :edit, :update, :destroy]

    def index
      @templates = Template.all
    end

    def show
    end

    def new
      @template = Template.new
    end

    def create
      @template = Template.new(template_params)
      if @template.save
        redirect_to admin_template_path(@template), notice: 'Template created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @template.update(template_params)
        redirect_to admin_template_path(@template), notice: 'Template updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @template.destroy
      redirect_to admin_templates_path, notice: 'Template deleted successfully.'
    end

    private

    def set_template
      @template = Template.find(params[:id])
    end

    def template_params
      params.require(:template).permit(:name)
    end
  end
end
