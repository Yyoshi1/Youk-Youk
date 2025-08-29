# frozen_string_literal: true
require 'json'
require 'fileutils'

class ContinentAdmin
  DATA_DIR = File.expand_path('../../db/continents', __dir__)

  attr_reader :continent_code, :name

  def initialize(continent_code:, name: nil)
    @continent_code = continent_code
    @name = name || continent_code
  end

  def path
    File.join(DATA_DIR, continent_code)
  end

  def ensure_structure!
    FileUtils.mkdir_p(path) unless Dir.exist?(path)
    FileUtils.mkdir_p(File.join(path, 'countries'))
  end

  def countries
    ensure_structure!
    Dir.children(File.join(path, 'countries'))
  end

  def save_admin_metadata(info = {})
    ensure_structure!
    File.write(File.join(path, 'continent_admin.json'), info.to_json)
  end

  def admin_metadata
    f = File.join(path, 'continent_admin.json')
    return {} unless File.exist?(f)
    JSON.parse(File.read(f))
  end
end
