# frozen_string_literal: true

class TemplateAsset < ApplicationRecord
  belongs_to :template_component
  validates :file_path, presence: true
end
