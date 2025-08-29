# frozen_string_literal: true

class Trip < ApplicationRecord
  belongs_to :model
  has_many :trip_passengers, dependent: :destroy
  has_many :passengers, through: :trip_passengers
  has_many :trip_drivers, dependent: :destroy
  has_many :drivers, through: :trip_drivers

  validates :name, :start_location, :end_location, presence: true
end
