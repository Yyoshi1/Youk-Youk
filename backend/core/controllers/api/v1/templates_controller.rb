# frozen_string_literal: true

module Api
  module V1
    class TemplatesController < ApplicationController
      before_action :set_template, only: %i[show update destroy]

      # GET /api/v1/templates
      def index
        @templates = Template.all
        render json: @templates
      end

      # GET /api/v1/templates/:id
      def show
        render json: @template
      end

      # POST /api/v1/templates
      def create
        @template = Template.new(template_params)
        if @template.save
          render json: @template, status: :created
        else
          render json: { errors: @template.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/templates/:id
      def update
        if @template.update(template_params)
          render json: @template
        else
          render json: { errors: @template.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/templates/:id
      def destroy
        @template.destroy
        head :no_content
      end

      private

      def set_template
        @template = Template.find(params[:id])
      end

      def template_params
        params.require(:template).permit(:name, :description)
      end
    end
  end
end
