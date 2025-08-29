# frozen_string_literal: true
# Integration initializer (lightweight). Use to wire components at runtime.

require_relative '../trips/trips_manager'
require_relative '../trips/passenger'
require_relative '../trips/driver'
require_relative '../hierarchy/super_admin'
require_relative '../hierarchy/continent_admin'
require_relative '../hierarchy/country_admin'
require_relative '../hierarchy/model_admin'

# Example convenience method to create sample data
module IntegrationInit
  def self.demo_setup
    # create a few passengers/drivers and a trip
    p = Passenger.new(name: 'Alice', phone: '+100000000')
    d = Driver.new(name: 'Bob', vehicle: 'Toyota Prius')
    tm = TripsManager.new
    trip = tm.create_trip(continent: 'Africa', country: 'Morocco', model: 'ModelA',
                          passenger_id: p.id, driver_id: d.id,
                          origin: 'Rabat', destination: 'Casablanca', time: Time.now.to_s)
    puts "Demo trip created: #{trip['id']}"
  end
end
