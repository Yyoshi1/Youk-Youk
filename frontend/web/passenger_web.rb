# frozen_string_literal: true
# Minimal CLI/web-adapter for Passenger web actions (placeholder)
require_relative '../../backend/trips/passenger'
require_relative '../../frontend/shared/window_manager'

module PassengerWeb
  def self.open_booking_ui(passenger_id)
    wm = WindowManager.new
    wm.create_window(icon: '🧑‍✈️', url: "/passengers/#{passenger_id}/booking", owner: passenger_id)
  end
end
