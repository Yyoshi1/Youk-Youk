# frozen_string_literal: true

class Country < ApplicationRecord
  self.table_name = 'countries'

  belongs_to :continent
  has_many :models, dependent: :destroy
  has_many :country_admins, dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :continent_id }
end
