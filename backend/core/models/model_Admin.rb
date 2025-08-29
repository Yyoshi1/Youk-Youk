# frozen_string_literal: true

class ModelAdmin < ActiveRecord::Base
  belongs_to :country_admin
  has_many :assistant_admins, as: :creator
  has_many :investors, as: :creator
end
