# frozen_string_literal: true

class SuperAdmin < ActiveRecord::Base
  has_many :continent_admins
end
