# frozen_string_literal: true

class Template < ApplicationRecord
  has_many :template_versions, dependent: :destroy
  validates :name, presence: true, uniqueness: true
end
