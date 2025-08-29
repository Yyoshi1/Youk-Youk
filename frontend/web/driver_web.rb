# frozen_string_literal: true
# Minimal CLI/web-adapter for Driver web actions (placeholder)
require_relative '../../backend/trips/driver'
require_relative '../../frontend/shared/window_manager'

module DriverWeb
  def self.open_dashboard(driver_id)
    wm = WindowManager.new
    wm.create_window(icon: '🚗', url: "/drivers/#{driver_id}/dashboard", owner: driver_id)
  end
end
