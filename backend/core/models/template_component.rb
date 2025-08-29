# frozen_string_literal: true

class TemplateComponent < ApplicationRecord
  belongs_to :template_version
  has_many :template_assets, dependent: :destroy
  validates :component_type, :content, presence: true
end
