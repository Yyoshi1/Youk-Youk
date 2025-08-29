# frozen_string_literal: true
class TemplateVersion < ApplicationRecord
  belongs_to :template
  has_many :components, class_name: 'TemplateComponent', dependent: :destroy
  has_many :assets, class_name: 'TemplateAsset', dependent: :destroy

  validates :version_number, presence: true
  validates :schema_json, presence: true # full JSON of template
  # status: draft / published / archived
  enum status: { draft: 0, published: 1, archived: 2 }

  before_create :set_version_number

  def set_version_number
    self.version_number ||= (template.versions.maximum(:version_number) || 0) + 1
  end
end
