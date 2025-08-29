# frozen_string_literal: true

module Admin
  class PassengersController < ApplicationController
    before_action :set_passenger, only: [:show, :edit, :update, :destroy]

    def index
      @passengers = Passenger.all
    end

    def show
    end

    def new
      @passenger = Passenger.new
    end

    def create
      @passenger = Passenger.new(passenger_params)
      if @passenger.save
        redirect_to admin_passenger_path(@passenger), notice: 'Passenger created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @passenger.update(passenger_params)
        redirect_to admin_passenger_path(@passenger), notice: 'Passenger updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @passenger.destroy
      redirect_to admin_passengers_path, notice: 'Passenger deleted successfully.'
    end

    private

    def set_passenger
      @passenger = Passenger.find(params[:id])
    end

    def passenger_params
      params.require(:passenger).permit(:name, :email)
    end
  end
end
