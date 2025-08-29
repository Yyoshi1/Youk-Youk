# frozen_string_literal: true

class Model < ApplicationRecord
  belongs_to :country
  has_many :trips, dependent: :destroy
  has_many :model_admins, class_name: 'Admin', foreign_key: 'model_id', dependent: :destroy
  has_many :investors, dependent: :nullify

  validates :name, presence: true, uniqueness: { scope: :country_id }
end
