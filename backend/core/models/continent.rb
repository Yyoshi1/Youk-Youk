# frozen_string_literal: true

class Continent < ApplicationRecord
  self.table_name = 'continents'

  has_many :countries, dependent: :destroy
  has_many :continent_admins, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
