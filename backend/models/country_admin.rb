# frozen_string_literal: true

class CountryAdmin < ActiveRecord::Base
  belongs_to :continent_admin
  has_many :model_admins
end
