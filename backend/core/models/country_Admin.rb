# frozen_string_literal: true

class CountryAdmin < ActiveRecord::Base
  belongs_to :continent_admin
  has_many :model_admins
  has_many :assistant_admins, as: :creator
  has_many :investors, as: :creator
end
