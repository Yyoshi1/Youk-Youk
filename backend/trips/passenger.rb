# frozen_string_literal: true
require 'json'
require 'fileutils'
require 'securerandom'

class Passenger
  DB = File.expand_path('../../db/passengers', __dir__)
  attr_accessor :id, :name, :phone

  def initialize(name:, phone:, id: nil)
    @id = id || SecureRandom.uuid
    @name = name
    @phone = phone
    persist
  end

  def persist
    FileUtils.mkdir_p(DB)
    File.write(File.join(DB, "#{id}.json"), to_h.to_json)
  end

  def to_h
    { id: id, name: name, phone: phone }
  end

  def self.find(id)
    f = File.join(DB, "#{id}.json")
    return nil unless File.exist?(f)
    data = JSON.parse(File.read(f))
    new(id: data['id'], name: data['name'], phone: data['phone'])
  end
end
