# frozen_string_literal: true

class Admin < ApplicationRecord
  belongs_to :continent, optional: true
  belongs_to :country, optional: true
  belongs_to :model, optional: true

  validates :name, :role, :email, presence: true
  validates :email, uniqueness: true

  # المساعدين يمكن لكل مسؤول إنشاءهم حسب صلاحياته
  has_many :assistants, class_name: 'Admin', foreign_key: 'supervisor_id', dependent: :destroy
  belongs_to :supervisor, class_name: 'Admin', optional: true
end
