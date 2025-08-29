# frozen_string_literal: true

class Admin::TemplatesController < ApplicationController
  before_action :set_template, only: [:show, :update, :destroy]

  def index
    @templates = Template.all
    render json: @templates
  end

  def show
    render json: @template
  end

  def create
    @template = Template.new(template_params)
    if @template.save
      render json: @template, status: :created
    else
      render json: @template.errors, status: :unprocessable_entity
    end
  end

  def update
    if @template.update(template_params)
      render json: @template
    else
      render json: @template.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @template.destroy
    head :no_content
  end

  private

  def set_template
    @template = Template.find(params[:id])
  end

  def template_params
    params.require(:template).permit(:name, :description, :version_number, components_attributes: [:id, :name, :component_type, :_destroy], assets_attributes: [:id, :file, :_destroy])
  end
end
