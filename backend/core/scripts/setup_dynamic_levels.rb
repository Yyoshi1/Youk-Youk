# frozen_string_literal: true
require 'active_record'
require 'fileutils'

# ===== إعداد الاتصال بقاعدة PostgreSQL =====
ActiveRecord::Base.establish_connection(
  adapter:  'postgresql',
  host:     'localhost',
  username: 'your_db_user',
  password: 'your_db_password',
  database: 'youkyouk_db'
)

# استدعاء الموديلز
Dir[File.join(__dir__, '../models/*.rb')].each { |file| require file }

# ==== دوال مساعدة لإنشاء مستويات جديدة ====
def create_continent(name)
  continent = Continent.create!(name: name)
  Admin.create!(name: "#{name} Admin", email: "#{name.downcase}_admin@youkyouk.com", continent: continent)
  create_docs_for_level(continent, "Continent")
  continent
end

def create_country(continent, name)
  country = Country.create!(name: name, continent: continent)
  Admin.create!(name: "#{name} Admin", email: "#{name.downcase}_admin@youkyouk.com", continent: continent, country: country)
  create_docs_for_level(country, "Country")
  country
end

def create_model(country, name)
  model = Model.create!(name: name, country: country)
  Admin.create!(name: "#{name} Admin", email: "#{name.downcase}_admin@youkyouk.com", continent: country.continent, country: country, model: model)
  # مستثمرون
  Investor.create!(name: "#{name} Full Investor", email: "#{name.downcase}_full@youkyouk.com",
                   investor_type: 'full_level', share_percentage: 100, continent: country.continent, country: country, model: model)
  Investor.create!(name: "#{name} Partial Investor", email: "#{name.downcase}_partial@youkyouk.com",
                   investor_type: 'partial_share', share_percentage: 30, continent: country.continent, country: country, model: model)
  # إنشاء Docs
  create_docs_for_level(model, "Model")
  model
end

def create_trip(model, start_loc:, end_loc:, passengers_count: 2)
  trip = Trip.create!(start_location: start_loc, end_location: end_loc, departure_time: Time.now + rand(1..5).hours, country: model.country, model: model)
  # ركاب
  passengers_count.times do |i|
    passenger = Passenger.create!(name: "Passenger#{i}_#{model.name}", email: "passenger#{i}_#{model.name}@example.com")
    TripPassenger.create!(trip: trip, passenger: passenger)
  end
  # سائق
  driver = Driver.create!(name: "Driver_#{model.name}", email: "driver_#{model.name}@example.com")
  TripDriver.create!(trip: trip, driver: driver)
  trip
end

# ==== توليد ملفات Docs تلقائيًا لكل مستوى ====
def create_docs_for_level(level_obj, level_type)
  base_path = File.join(__dir__, '../../Docs', "#{level_type}_#{level_obj.id}_#{level_obj.name.gsub(/\s+/, '_')}")
  FileUtils.mkdir_p(base_path)

  # الملفات الأساسية
  ['Overview.md', 'Design.md', 'Integration.md'].each do |fname|
    File.write(File.join(base_path, fname), "# #{level_type} #{level_obj.name} - #{fname.gsub('.md','')}\n\nGenerated automatically.")
  end

  # إنشاء index.html مع روابط تفاعلية
  html_content = "<html><body><h1>#{level_type} #{level_obj.name} Docs</h1><ul>"
  ['Overview.md', 'Design.md', 'Integration.md'].each do |fname|
    html_content += "<li><a href='#{fname}'>#{fname}</a></li>"
  end
  html_content += "</ul></body></html>"
  File.write(File.join(base_path, 'index.html'), html_content)
end

# ==== مثال على توليد مستويات جديدة تلقائيًا ====
super_admin = Admin.create!(name: 'Super Admin', email: 'superadmin@youkyouk.com')

africa = create_continent('Africa')
egypt = create_country(africa, 'Egypt')
model_a = create_model(egypt, 'ModelA')
create_trip(model_a, start_loc: 'Cairo', end_loc: 'Giza')

puts "تم إنشاء الهيكل الهرمي والمستويات الجديدة والرحلات وملفات Docs تلقائيًا!"
