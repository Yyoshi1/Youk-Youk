# frozen_string_literal: true

class Country < ApplicationRecord
  belongs_to :continent
  has_many :models, dependent: :destroy
  has_many :investors, dependent: :nullify

  validates :name, presence: true, uniqueness: { scope: :continent_id }
end
