# frozen_string_literal: true

class Driver < ApplicationRecord
  has_many :trips
  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
