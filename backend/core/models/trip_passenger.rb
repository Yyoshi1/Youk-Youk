# frozen_string_literal: true

class TripPassenger < ApplicationRecord
  belongs_to :trip
  belongs_to :passenger
end
