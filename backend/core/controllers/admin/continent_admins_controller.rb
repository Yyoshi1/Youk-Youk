backend/core/controllers/admin/continent_admins_controller.rb


# frozen_string_literal: true

class Admin::ContinentAdminsController < ApplicationController
  before_action :set_admin, only: [:show, :update, :destroy]

  def index
    @admins = Admin.where.not(continent_id: nil).where(super_admin_id: params[:super_admin_id])
    render json: @admins
  end

  def show
    render json: @admin
  end

  def create
    @admin = Admin.new(admin_params)
    if @admin.save
      render json: @admin, status: :created
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  def update
    if @admin.update(admin_params)
      render json: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @admin.destroy
    head :no_content
  end

  private

  def set_admin
    @admin = Admin.find(params[:id])
  end

  def admin_params
    params.require(:admin).permit(:name, :email, :continent_id, :super_admin_id)
  end
end
