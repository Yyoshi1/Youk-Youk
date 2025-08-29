# frozen_string_literal: true

class ContinentAdmin < ActiveRecord::Base
  belongs_to :super_admin
  has_many :country_admins
end
