backend/core/controllers/admin/super_admins_controller.rb



# frozen_string_literal: true

class Admin::SuperAdminsController < ApplicationController
  before_action :set_super_admin, only: [:show, :update, :destroy]

  def index
    @super_admins = Admin.where(super_admin_id: nil)
    render json: @super_admins
  end

  def show
    render json: @super_admin
  end

  def create
    @super_admin = Admin.new(super_admin_params)
    if @super_admin.save
      render json: @super_admin, status: :created
    else
      render json: @super_admin.errors, status: :unprocessable_entity
    end
  end

  def update
    if @super_admin.update(super_admin_params)
      render json: @super_admin
    else
      render json: @super_admin.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @super_admin.destroy
    head :no_content
  end

  private

  def set_super_admin
    @super_admin = Admin.find(params[:id])
  end

  def super_admin_params
    params.require(:admin).permit(:name, :email)
  end
end
