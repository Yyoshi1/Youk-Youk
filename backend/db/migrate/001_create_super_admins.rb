# frozen_string_literal: true

class CreateContinents < ActiveRecord::Migration[7.0]
  def change
    create_table :continents do |t|
      t.string :name, null: false
      t.string :code, null: false, unique: true
      t.timestamps
    end
  end
end
