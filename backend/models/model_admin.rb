# frozen_string_literal: true

class ModelAdmin < ActiveRecord::Base
  belongs_to :country_admin
  has_many :trips
  has_many :drivers
  has_many :passengers
end
