# frozen_string_literal: true

class TemplateVersion < ApplicationRecord
  belongs_to :template
  has_many :template_components, dependent: :destroy
  validates :version_number, presence: true
end
