# frozen_string_literal: true
# Ruby-side WindowManager: maintains window metadata and state.
# This is the backend controller that frontends can query via API.
require 'json'
require 'fileutils'
require 'securerandom'

class WindowManager
  DB = File.expand_path('../../backend/db/windows', __dir__)

  def initialize
    FileUtils.mkdir_p(DB)
  end

  def create_window(icon:, url:, owner:)
    id = SecureRandom.uuid
    record = { id: id, icon: icon, url: url, owner: owner, maximized: false, visible: true }
    File.write(File.join(DB, "#{id}.json"), record.to_json)
    record
  end

  def list_windows
    Dir.children(DB).map { |f| JSON.parse(File.read(File.join(DB, f))) }
  end

  def update(id, attrs = {})
    path = File.join(DB, "#{id}.json")
    return nil unless File.exist?(path)
    rec = JSON.parse(File.read(path))
    rec.merge!(attrs)
    File.write(path, rec.to_json)
    rec
  end

  def remove(id)
    path = File.join(DB, "#{id}.json")
    File.delete(path) if File.exist?(path)
    true
  end
end
