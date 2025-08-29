# frozen_string_literal: true
class TemplateAsset < ApplicationRecord
  belongs_to :template_version
  # store: path to asset (CDN), checksum
  validates :path, presence: true
end
