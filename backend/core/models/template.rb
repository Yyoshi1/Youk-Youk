# frozen_string_literal: true
class Template < ApplicationRecord
  has_many :versions, class_name: 'TemplateVersion', dependent: :destroy
  validates :country_code, presence: true, uniqueness: true
  # owner could be investor or system
  belongs_to :owner, polymorphic: true, optional: true
end
