# frozen_string_literal: true

module Admin
  class TripsController < ApplicationController
    before_action :set_trip, only: [:show, :edit, :update, :destroy]

    def index
      @trips = Trip.all
    end

    def show
    end

    def new
      @trip = Trip.new
    end

    def create
      @trip = Trip.new(trip_params)
      if @trip.save
        redirect_to admin_trip_path(@trip), notice: 'Trip created successfully.'
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @trip.update(trip_params)
        redirect_to admin_trip_path(@trip), notice: 'Trip updated successfully.'
      else
        render :edit
      end
    end

    def destroy
      @trip.destroy
      redirect_to admin_trips_path, notice: 'Trip deleted successfully.'
    end

    private

    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :model_id, :driver_id, :departure_time, :arrival_time)
    end
  end
end
