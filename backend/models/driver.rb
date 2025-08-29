# frozen_string_literal: true

class Driver < ActiveRecord::Base
  belongs_to :model_admin
end
