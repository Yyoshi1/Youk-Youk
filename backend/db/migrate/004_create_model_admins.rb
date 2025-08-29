# frozen_string_literal: true

class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :role, null: false       # superadmin, continent_admin, country_admin, model_admin
      t.references :parent_admin, foreign_key: { to_table: :admins } # للمسؤول الأعلى/المساعد
      t.references :continent, foreign_key: true
      t.references :country, foreign_key: true
      t.references :model, foreign_key: true
      t.timestamps
    end
  end
end
