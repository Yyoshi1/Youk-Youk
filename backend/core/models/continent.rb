# frozen_string_literal: true

class Continent < ApplicationRecord
  has_many :countries, dependent: :destroy
  has_many :investors, dependent: :nullify

  validates :name, presence: true, uniqueness: true
end
