# frozen_string_literal: true

class CreateInvestors < ActiveRecord::Migration[7.0]
  def change
    create_table :investors do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :phone_number
      t.string :investor_type, null: false # full_level or partial_share
      t.references :continent, foreign_key: true
      t.references :country, foreign_key: true
      t.references :model, foreign_key: true
      t.decimal :share_percentage, precision: 5, scale: 2, default: 100.0
      t.timestamps
    end
  end
end
