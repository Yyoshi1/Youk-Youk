# frozen_string_literal: true

module Admin
  class InvestorsController < ApplicationController
    before_action :set_investor, only: [:show, :edit, :update, :destroy]

    def index
      @investors = Investor.all
    end

    def show
    end

    def new
      @investor = Investor.new
    end

    def create
      @investor = Investor.new(investor_params)
      if @investor.save
        redirect_to admin_investor_path(@investor), notice: 'Investor created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @investor.update(investor_params)
        redirect_to admin_investor_path(@investor), notice: 'Investor updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @investor.destroy
      redirect_to admin_investors_path, notice: 'Investor deleted successfully.'
    end

    private

    def set_investor
      @investor = Investor.find(params[:id])
    end

    def investor_params
      params.require(:investor).permit(:name, :email, :investor_type, :share_percentage, :continent_id, :country_id, :model_id)
    end
  end
end
