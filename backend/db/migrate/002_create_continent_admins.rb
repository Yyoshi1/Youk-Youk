# frozen_string_literal: true

class CreateCountries < ActiveRecord::Migration[7.0]
  def change
    create_table :countries do |t|
      t.string :name, null: false
      t.string :code, null: false, unique: true
      t.references :continent, null: false, foreign_key: true
      t.timestamps
    end
  end
end
