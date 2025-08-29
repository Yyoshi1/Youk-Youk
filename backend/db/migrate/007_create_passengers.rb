# frozen_string_literal: true

class CreatePassengers < ActiveRecord::Migration[7.0]
  def change
    create_table :passengers do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :phone_number
      t.references :model, null: false, foreign_key: true
      t.timestamps
    end
  end
end
