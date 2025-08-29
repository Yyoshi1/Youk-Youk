class CreateContinentAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :continent_admins do |t|
      t.string :name, null: false
      t.string :email, null: false, index: { unique: true }
      t.references :super_admin, null: false, foreign_key: true
      t.string :encrypted_password, null: false

      t.timestamps
    end
  end
end
