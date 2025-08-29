# frozen_string_literal: true

class Template < ApplicationRecord
  has_many :template_versions, dependent: :destroy
  has_many :template_components, through: :template_versions
  has_many :template_assets, through: :template_components

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
