# frozen_string_literal: true

class Driver < ApplicationRecord
  has_many :trip_drivers
  has_many :trips, through: :trip_drivers

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
