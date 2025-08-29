# frozen_string_literal: true

class Country < ApplicationRecord
  belongs_to :continent
  has_many :models, dependent: :destroy
  has_many :investors, dependent: :nullify
  has_many :country_admins, class_name: 'Admin', foreign_key: 'country_id', dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :continent_id }
end
