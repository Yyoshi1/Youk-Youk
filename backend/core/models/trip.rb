# frozen_string_literal: true

class Trip < ApplicationRecord
  belongs_to :model
  belongs_to :driver
  has_many :trip_passengers
  has_many :passengers, through: :trip_passengers

  validates :name, :departure_time, :arrival_time, presence: true
end
