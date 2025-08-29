# frozen_string_literal: true
require_relative '../scripts/setup_dynamic_levels'

class LevelManager
  def initialize(current_admin)
    @admin = current_admin
  end

  # إنشاء قارة جديدة
  def add_continent(name)
    continent = create_continent(name)
    puts "تم إنشاء القارة: #{continent.name} مع المسؤولين والمستثمرين وملفات Docs"
    continent
  end

  # إنشاء دولة جديدة
  def add_country(continent, name)
    country = create_country(continent, name)
    puts "تم إنشاء الدولة: #{country.name} تحت القارة #{continent.name} مع المسؤولين والمستثمرين وملفات Docs"
    country
  end

  # إنشاء نموذج جديد
  def add_model(country, name)
    model = create_model(country, name)
    puts "تم إنشاء النموذج: #{model.name} تحت الدولة #{country.name} مع المسؤولين والمستثمرين وملفات Docs"
    model
  end

  # إنشاء رحلة جديدة لنموذج
  def add_trip(model, start_loc:, end_loc:, passengers_count: 2)
    trip = create_trip(model, start_loc: start_loc, end_loc: end_loc, passengers_count: passengers_count)
    puts "تم إنشاء الرحلة من #{start_loc} إلى #{end_loc} للنموذج #{model.name}"
    trip
  end

  # عرض الهيكل الهرمي الحالي
  def show_hierarchy
    Continent.includes(countries: :models).each do |continent|
      puts "القارة: #{continent.name}"
      continent.countries.each do |country|
        puts "  الدولة: #{country.name}"
        country.models.each do |model|
          puts "    النموذج: #{model.name}"
        end
      end
    end
  end
end
