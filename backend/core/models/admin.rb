# frozen_string_literal: true

class Admin < ApplicationRecord
  belongs_to :super_admin, optional: true
  belongs_to :continent, optional: true
  belongs_to :country, optional: true
  belongs_to :model, optional: true

  # مسؤول يمكنه إضافة مساعدين
  has_many :assistants, class_name: "Admin", foreign_key: "super_admin_id"
  
  # مسؤول يمكنه إدارة المستثمرين ضمن مستواه
  has_many :investors, ->(admin) {
    if admin.model
      where(model: admin.model)
    elsif admin.country
      where(country: admin.country)
    elsif admin.continent
      where(continent: admin.continent)
    else
      all
    end
  }, class_name: "Investor"
end
