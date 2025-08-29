# frozen_string_literal: true

class Admin < ApplicationRecord
  self.table_name = 'admins'

  belongs_to :model, optional: true
  belongs_to :country, optional: true
  belongs_to :continent, optional: true

  has_many :admin_assistants, dependent: :destroy

  validates :name, presence: true
  validates :role, presence: true # superadmin, continent_admin, country_admin, model_admin
end
