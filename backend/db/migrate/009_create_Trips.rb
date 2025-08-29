# frozen_string_literal: true

class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.references :passenger, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true
      t.references :model, null: false, foreign_key: true
      t.string :start_location
      t.string :end_location
      t.datetime :start_time
      t.datetime :end_time
      t.decimal :price, precision: 10, scale: 2
      t.string :status, default: 'scheduled' # scheduled, in_progress, completed, cancelled
      t.timestamps
    end
  end
end
