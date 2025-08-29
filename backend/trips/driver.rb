# frozen_string_literal: true
require 'json'
require 'fileutils'
require 'securerandom'

class Driver
  DB = File.expand_path('../../db/drivers', __dir__)
  attr_accessor :id, :name, :vehicle

  def initialize(name:, vehicle:, id: nil)
    @id = id || SecureRandom.uuid
    @name = name
    @vehicle = vehicle
    persist
  end

  def persist
    FileUtils.mkdir_p(DB)
    File.write(File.join(DB, "#{id}.json"), to_h.to_json)
  end

  def to_h
    { id: id, name: name, vehicle: vehicle }
  end

  def self.find(id)
    f = File.join(DB, "#{id}.json")
    return nil unless File.exist?(f)
    data = JSON.parse(File.read(f))
    new(id: data['id'], name: data['name'], vehicle: data['vehicle'])
  end
end
