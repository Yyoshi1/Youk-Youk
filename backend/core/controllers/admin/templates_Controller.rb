# frozen_string_literal: true

class CreateTemplates < ActiveRecord::Migration[7.0]
  def change
    # جدول القوالب
    create_table :templates do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :templates, :name, unique: true

    # جدول نسخ القوالب
    create_table :template_versions do |t|
      t.references :template, null: false, foreign_key: true
      t.string :version_number, null: false
      t.timestamps
    end

    # جدول مكونات النسخ
    create_table :template_components do |t|
      t.references :template_version, null: false, foreign_key: true
      t.string :name, null: false
      t.string :component_type, null: false
      t.timestamps
    end

    # جدول ملفات النسخ
    create_table :template_assets do |t|
      t.references :template_version, null: false, foreign_key: true
      t.string :file_name
      t.timestamps
    end
  end
end
