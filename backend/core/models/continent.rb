# frozen_string_literal: true

class Continent < ApplicationRecord
  has_many :countries, dependent: :destroy
  has_many :investors, dependent: :nullify

  # مسؤول القارة والمساعدين
  has_many :continent_admins, class_name: 'Admin', foreign_key: 'continent_id', dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
