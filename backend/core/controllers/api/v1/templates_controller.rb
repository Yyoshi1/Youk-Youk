# frozen_string_literal: true

module Api
  module V1
    class TemplatesController < ApplicationController
      before_action :set_template, only: [:show]

      def index
        @templates = Template.all
        render json: @templates
      end

      def show
        render json: @template
      end

      private

      def set_template
        @template = Template.find(params[:id])
      end
    end
  end
end
