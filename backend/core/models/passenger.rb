# frozen_string_literal: true

class Passenger < ApplicationRecord
  belongs_to :model
  belongs_to :country

  # الارتباط بالرحلات
  has_many :trips, foreign_key: :passenger_id, dependent: :destroy
  has_many :trip_passengers
  has_many :trips, through: :trip_passengers

  # التحقق من البيانات الأساسية
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true
end
