# frozen_string_literal: true

class Passenger < ApplicationRecord
  # ارتباط بالرحلات
  has_many :trip_passengers
  has_many :trips, through: :trip_passengers

  # التحقق من البيانات الأساسية
  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
