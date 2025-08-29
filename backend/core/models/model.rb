# frozen_string_literal: true

class Model < ApplicationRecord
  self.table_name = 'models'

  belongs_to :country
  has_many :model_admins, dependent: :destroy
  has_many :trips, dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :country_id }
end
