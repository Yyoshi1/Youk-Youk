# frozen_string_literal: true
require 'json'
require 'fileutils'
require 'securerandom'
require_relative 'passenger'
require_relative 'driver'

class TripsManager
  DB_ROOT = File.expand_path('../../db/trips', __dir__)

  def initialize
    FileUtils.mkdir_p(DB_ROOT)
  end

  # each country will have its own file or folder under DB_ROOT/<country_code>/
  def create_trip(continent:, country:, model:, passenger_id:, driver_id:, origin:, destination:, time:)
    trip_id = SecureRandom.uuid
    dir = File.join(DB_ROOT, continent, country, model)
    FileUtils.mkdir_p(dir)
    trip = {
      id: trip_id,
      passenger_id: passenger_id,
      driver_id: driver_id,
      origin: origin,
      destination: destination,
      time: time,
      status: 'scheduled'
    }
    File.write(File.join(dir, "#{trip_id}.json"), trip.to_json)
    trip
  end

  def list_trips(continent:, country:, model:)
    dir = File.join(DB_ROOT, continent, country, model)
    return [] unless Dir.exist?(dir)
    Dir.children(dir).map do |f|
      JSON.parse(File.read(File.join(dir, f)))
    end
  end

  def update_status(continent:, country:, model:, trip_id:, status:)
    path = File.join(DB_ROOT, continent, country, model, "#{trip_id}.json")
    return false unless File.exist?(path)
    trip = JSON.parse(File.read(path))
    trip['status'] = status
    File.write(path, trip.to_json)
    trip
  end
end
