# frozen_string_literal: true

class Trip < ApplicationRecord
  # الارتباط بالنماذج، الدول، والمسؤولين
  belongs_to :model, optional: true
  belongs_to :country, optional: true
  belongs_to :continent, optional: true

  # الارتباط بالركاب والسائقين
  has_many :trip_passengers
  has_many :passengers, through: :trip_passengers
  has_many :trip_drivers
  has_many :drivers, through: :trip_drivers

  # التحقق من الحقول الأساسية
  validates :start_location, :end_location, :departure_time, presence: true
end
