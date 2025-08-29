# frozen_string_literal: true
require 'json'
require 'fileutils'

class CountryAdmin
  DATA_DIR = File.expand_path('../../db/continents', __dir__)

  attr_reader :continent_code, :country_code, :name

  def initialize(continent_code:, country_code:, name: nil)
    @continent_code = continent_code
    @country_code = country_code
    @name = name || country_code
  end

  def path
    File.join(DATA_DIR, continent_code, 'countries', country_code)
  end

  def ensure_structure!
    FileUtils.mkdir_p(path) unless Dir.exist?(path)
    FileUtils.mkdir_p(File.join(path, 'models'))
    FileUtils.mkdir_p(File.join(path, 'passengers'))
    FileUtils.mkdir_p(File.join(path, 'drivers'))
    FileUtils.mkdir_p(File.join(path, 'trips'))
  end

  def models
    ensure_structure!
    Dir.children(File.join(path, 'models'))
  end

  def save_admin_metadata(info = {})
    ensure_structure!
    File.write(File.join(path, 'country_admin.json'), info.to_json)
  end

  def admin_metadata
    f = File.join(path, 'country_admin.json')
    return {} unless File.exist?(f)
    JSON.parse(File.read(f))
  end
end
