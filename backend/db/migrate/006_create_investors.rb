class CreateInvestors < ActiveRecord::Migration[7.0]
  def change
    create_table :investors do |t|
      t.string :name, null: false
      t.string :email, null: false, index: { unique: true }
      t.integer :investor_type, null: false
      t.references :creator, polymorphic: true, null: false
      t.references :level_admin, polymorphic: true, null: false

      t.timestamps
    end
  end
end
