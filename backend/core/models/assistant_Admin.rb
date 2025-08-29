# frozen_string_literal: true

class AssistantAdmin < ActiveRecord::Base
  belongs_to :creator, polymorphic: true
  belongs_to :level_admin, polymorphic: true

  enum level_type: { superadmin: 0, continent_admin: 1, country_admin: 2, model_admin: 3 }
end
