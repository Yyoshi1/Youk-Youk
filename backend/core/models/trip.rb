# frozen_string_literal: true

class Trip < ApplicationRecord
  self.table_name = 'trips'

  belongs_to :model
  belongs_to :driver
  has_many :passengers, dependent: :destroy

  validates :origin, :destination, :departure_time, presence: true
end
