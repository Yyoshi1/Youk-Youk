# frozen_string_literal: true
require 'json'
require 'fileutils'

class SuperAdmin
  DATA_DIR = File.expand_path('../../db', __dir__)

  attr_reader :id, :name

  def initialize(id:, name: 'Super Admin')
    @id = id
    @name = name
  end

  # قائمة القارات المتاحة (قراءة مجلدات db/continents)
  def continents
    dir = File.join(DATA_DIR, 'continents')
    return [] unless Dir.exist?(dir)
    Dir.children(dir)
  end

  # احصل على تمثيل مبسط
  def info
    { id: id, name: name, continents: continents }
  end
end
