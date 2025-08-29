# frozen_string_literal: true

class Investor < ActiveRecord::Base
  enum investor_type: { full_level: 0, share_level: 1 }
  belongs_to :creator, polymorphic: true
  belongs_to :level_admin, polymorphic: true
end
