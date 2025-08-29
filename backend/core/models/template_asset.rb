# frozen_string_literal: true

class TemplateAsset < ApplicationRecord
  belongs_to :template_version
  has_one_attached :file

  validates :file, presence: true
end
