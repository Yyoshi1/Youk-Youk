# frozen_string_literal: true

class Admin::InvestorsController < ApplicationController
  before_action :set_investor, only: [:show, :update, :destroy, :detach_level]

  def index
    @investors = Investor.all
    render json: @investors
  end

  def show
    render json: @investor
  end

  def create
    @investor = Investor.new(investor_params)
    if @investor.save
      render json: @investor, status: :created
    else
      render json: @investor.errors, status: :unprocessable_entity
    end
  end

  def update
    if @investor.update(investor_params)
      render json: @investor
    else
      render json: @investor.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @investor.destroy
    head :no_content
  end

  # فصل المستوى عند بيع الحصة بالكامل
  def detach_level
    @investor.detach_level_if_full_sale
    render json: { message: 'تم فصل المستوى بنجاح' }
  end

  private

  def set_investor
    @investor = Investor.find(params[:id])
  end

  def investor_params
    params.require(:investor).permit(:name, :email, :investor_type, :share_percentage, :continent_id, :country_id, :model_id)
  end
end
