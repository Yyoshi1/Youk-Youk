# frozen_string_literal: true

class Passenger < ActiveRecord::Base
  belongs_to :model_admin
end
