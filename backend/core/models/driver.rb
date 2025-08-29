# frozen_string_literal: true

class Driver < ApplicationRecord
  # ارتباط بالرحلات
  has_many :trip_drivers
  has_many :trips, through: :trip_drivers

  # التحقق من البيانات الأساسية
  validates :name, :email, :license_number, presence: true
  validates :email, uniqueness: true
end
