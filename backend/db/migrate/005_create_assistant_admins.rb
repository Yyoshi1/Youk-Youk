# frozen_string_literal: true

class CreateInvestors < ActiveRecord::Migration[7.0]
  def change
    create_table :investors do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :investment_type, null: false # full_level, share_level
      t.references :level_reference, polymorphic: true, null: false # continent/country/model
      t.decimal :share_percentage, default: 100
      t.timestamps
    end
  end
end
