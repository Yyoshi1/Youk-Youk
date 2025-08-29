# frozen_string_literal: true
# Simple switcher between passenger and driver mode
module MobileSwitch
  def self.start_as(mode:, user_id:)
    case mode.to_s
    when 'passenger'
      require_relative 'passenger_mode/ui'
      PassengerMobileUI.start(user_id)
    when 'driver'
      require_relative 'driver_mode/ui'
      DriverMobileUI.start(user_id)
    else
      puts "Unknown mode #{mode}"
    end
  end
end
