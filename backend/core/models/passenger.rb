# frozen_string_literal: true

class Passenger < ApplicationRecord
  self.table_name = 'passengers'

  belongs_to :trip, optional: true

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
