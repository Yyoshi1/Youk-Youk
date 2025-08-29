# frozen_string_literal: true

class Passenger < ApplicationRecord
  has_many :trip_passengers
  has_many :trips, through: :trip_passengers

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
