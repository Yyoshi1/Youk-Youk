# frozen_string_literal: true

class Trip < ApplicationRecord
  belongs_to :model
  belongs_to :country

  has_many :trip_passengers
  has_many :passengers, through: :trip_passengers

  has_many :trip_drivers
  has_many :drivers, through: :trip_drivers

  # التحقق من البيانات الأساسية
  validates :start_location, :end_location, :departure_time, :arrival_time, presence: true
end
