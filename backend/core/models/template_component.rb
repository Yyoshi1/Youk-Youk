# frozen_string_literal: true

class TemplateComponent < ApplicationRecord
  belongs_to :template_version

  validates :name, presence: true
  validates :component_type, presence: true, inclusion: { in: ['header', 'footer', 'card', 'section'] }
end
