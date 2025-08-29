# frozen_string_literal: true
class TemplateComponent < ApplicationRecord
  belongs_to :template_version
  # fields: component_type (hero, list, card, promo), config JSON
  validates :component_type, :config_json, presence: true
end
