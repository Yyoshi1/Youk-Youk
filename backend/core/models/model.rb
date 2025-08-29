# frozen_string_literal: true

class Model < ApplicationRecord
  belongs_to :country
  has_many :drivers, dependent: :destroy
  has_many :passengers, dependent: :destroy
  has_many :trips, dependent: :destroy
  has_many :investors, dependent: :nullify

  validates :name, presence: true, uniqueness: { scope: :country_id }
end
