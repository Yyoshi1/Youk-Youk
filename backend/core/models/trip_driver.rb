# frozen_string_literal: true

class TripDriver < ApplicationRecord
  belongs_to :trip
  belongs_to :driver
end
