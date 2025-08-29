# frozen_string_literal: true

class CreateModels < ActiveRecord::Migration[7.0]
  def change
    create_table :models do |t|
      t.string :name, null: false
      t.references :country, null: false, foreign_key: true
      t.timestamps
    end
  end
end
