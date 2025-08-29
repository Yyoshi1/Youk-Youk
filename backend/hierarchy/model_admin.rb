# frozen_string_literal: true
require 'json'
require 'fileutils'

class ModelAdmin
  attr_reader :continent_code, :country_code, :model_code

  def initialize(continent_code:, country_code:, model_code:)
    @continent_code = continent_code
    @country_code = country_code
    @model_code = model_code
  end

  def path
    File.expand_path(File.join("../../db/continents", continent_code, "countries", country_code, "models", model_code), __dir__)
  end

  def ensure_structure!
    FileUtils.mkdir_p(path) unless Dir.exist?(path)
    FileUtils.mkdir_p(File.join(path, 'admins'))
    FileUtils.mkdir_p(File.join(path, 'features'))
  end

  def admins
    ensure_structure!
    Dir.children(File.join(path, 'admins'))
  end

  def add_admin(admin_id, info = {})
    ensure_structure!
    f = File.join(path, 'admins', "#{admin_id}.json")
    File.write(f, info.merge(id: admin_id).to_json)
  end
end
