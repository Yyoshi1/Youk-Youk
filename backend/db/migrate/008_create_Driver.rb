# frozen_string_literal: true

class CreateDrivers < ActiveRecord::Migration[7.0]
  def change
    create_table :drivers do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :phone_number
      t.string :license_number
      t.references :model, null: false, foreign_key: true
      t.timestamps
    end
  end
end
