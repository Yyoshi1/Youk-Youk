# frozen_string_literal: true

class TemplateVersion < ApplicationRecord
  belongs_to :template
  has_many :template_components, dependent: :destroy
  has_many :template_assets, dependent: :destroy

  accepts_nested_attributes_for :template_components, allow_destroy: true
  accepts_nested_attributes_for :template_assets, allow_destroy: true

  validates :version_number, presence: true
end
