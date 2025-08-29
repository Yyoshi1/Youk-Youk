require_relative 'boot'
require 'rails/all'
Bundler.require(*Rails.groups)

module Youkyouk
  class Application < Rails::Application
    config.load_defaults 7.1
    config.time_zone = 'UTC'
    config.active_record.schema_format = :sql
  end
end
