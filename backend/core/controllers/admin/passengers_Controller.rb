# frozen_string_literal: true

class Admin::PassengersController < ApplicationController
  before_action :set_passenger, only: [:show, :update, :destroy]

  def index
    @passengers = Passenger.all
    render json: @passengers
  end

  def show
    render json: @passenger
  end

  def create
    @passenger = Passenger.new(passenger_params)
    if @passenger.save
      render json: @passenger, status: :created
    else
      render json: @passenger.errors, status: :unprocessable_entity
    end
  end

  def update
    if @passenger.update(passenger_params)
      render json: @passenger
    else
      render json: @passenger.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @passenger.destroy
    head :no_content
  end

  private

  def set_passenger
    @passenger = Passenger.find(params[:id])
  end

  def passenger_params
    params.require(:passenger).permit(:name, :email)
  end
end
