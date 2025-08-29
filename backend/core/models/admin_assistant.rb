# frozen_string_literal: true

class AdminAssistant < ApplicationRecord
  self.table_name = 'admin_assistants'

  belongs_to :admin

  validates :name, presence: true
  validates :permissions, presence: true # JSON field for allowed actions
end
