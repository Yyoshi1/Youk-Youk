# frozen_string_literal: true

class Driver < ApplicationRecord
  belongs_to :model
  belongs_to :country

  # الارتباط بالرحلات
  has_many :trip_drivers
  has_many :trips, through: :trip_drivers, dependent: :destroy

  # التحقق من البيانات الأساسية
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true
  validates :license_number, presence: true, uniqueness: true
end
