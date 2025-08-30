# frozen_string_literal: true

module Admin
  class AdminsController < ApplicationController
    before_action :set_admin, only: [:show, :edit, :update, :destroy]

    def index
      @admins = Admin.all
    end

    def show
    end

    def new
      @admin = Admin.new
    end

    def create
      @admin = Admin.new(admin_params)
      if @admin.save
        redirect_to admin_admin_path(@admin), notice: 'Admin created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @admin.update(admin_params)
        redirect_to admin_admin_path(@admin), notice: 'Admin updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @admin.destroy
      redirect_to admin_admins_path, notice: 'Admin deleted successfully.'
    end

    private

    def set_admin
      @admin = Admin.find(params[:id])
    end

    def admin_params
      params.require(:admin).permit(:name, :email, :role, :continent_id, :country_id, :model_id)
    end
  end
end
