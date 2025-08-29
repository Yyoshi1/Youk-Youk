# frozen_string_literal: true

class Driver < ApplicationRecord
  self.table_name = 'drivers'

  belongs_to :trip, optional: true

  validates :name, presence: true
  validates :license_number, presence: true, uniqueness: true
end
