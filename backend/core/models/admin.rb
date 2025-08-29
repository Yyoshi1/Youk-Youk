# frozen_string_literal: true

class Admin < ApplicationRecord
  belongs_to :continent, optional: true
  belongs_to :country, optional: true
  belongs_to :model, optional: true
  belongs_to :super_admin, class_name: 'Admin', optional: true

  has_many :sub_admins, class_name: 'Admin', foreign_key: 'super_admin_id', dependent: :destroy

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
