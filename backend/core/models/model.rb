# frozen_string_literal: true

class Model < ApplicationRecord
  belongs_to :country
  has_many :investors, dependent: :nullify

  # مسؤول النموذج والمساعدين
  has_many :model_admins, class_name: 'Admin', foreign_key: 'model_id', dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :country_id }
end
