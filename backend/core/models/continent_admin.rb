# frozen_string_literal: true

class ContinentAdmin < ActiveRecord::Base
  belongs_to :super_admin
  has_many :country_admins
  has_many :model_admins
  has_many :assistant_admins, as: :creator
  has_many :investors, as: :creator
end
