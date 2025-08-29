# frozen_string_literal: true

module Admin
  class DriversController < ApplicationController
    before_action :set_driver, only: [:show, :edit, :update, :destroy]

    def index
      @drivers = Driver.all
    end

    def show
    end

    def new
      @driver = Driver.new
    end

    def create
      @driver = Driver.new(driver_params)
      if @driver.save
        redirect_to admin_driver_path(@driver), notice: 'Driver created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @driver.update(driver_params)
        redirect_to admin_driver_path(@driver), notice: 'Driver updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @driver.destroy
      redirect_to admin_drivers_path, notice: 'Driver deleted successfully.'
    end

    private

    def set_driver
      @driver = Driver.find(params[:id])
    end

    def driver_params
      params.require(:driver).permit(:name, :email, :license_number)
    end
  end
end
