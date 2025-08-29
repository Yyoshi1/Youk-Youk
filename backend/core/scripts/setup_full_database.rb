# frozen_string_literal: true
require 'active_record'
require 'pg'

# إعداد الاتصال بقاعدة البيانات
ActiveRecord::Base.establish_connection(
  adapter:  'postgresql',
  host:     'localhost',
  username: 'your_db_user',
  password: 'your_db_password',
  database: 'youkyouk_db'
)

# تعريف الموديلز (يمكن استدعاء الملفات السابقة بدل تعريفها هنا)
Dir[File.join(__dir__, '../models/*.rb')].each { |file| require file }

# ==== تنظيف البيانات القديمة (اختياري) ====
[TripDriver, TripPassenger, Trip, Driver, Passenger, Investor, Admin, Model, Country, Continent].each(&:delete_all)

puts "تم تنظيف البيانات القديمة."

# ==== إنشاء الهيكل الهرمي ====
super_admin = Admin.create!(name: 'Super Admin', email: 'superadmin@youkyouk.com')

# إضافة قارات
continents = ['Africa', 'Europe', 'Asia'].map do |name|
  Continent.create!(name: name)
end

# لكل قارة، إنشاء مسؤول قارة والمستثمرين
continents.each do |continent|
  Admin.create!(name: "#{continent.name} Admin", email: "#{continent.name.downcase}_admin@youkyouk.com", continent: continent)
  
  # إضافة بعض الدول لكل قارة
  countries = ['Country1', 'Country2'].map do |cname|
    Country.create!(name: "#{continent.name}_#{cname}", continent: continent)
  end

  countries.each do |country|
    # مسؤول دولة
    Admin.create!(name: "#{country.name} Admin", email: "#{country.name.downcase}_admin@youkyouk.com", continent: country.continent, country: country)
    
    # إضافة نماذج
    ['ModelA', 'ModelB'].each do |mname|
      model = Model.create!(name: "#{country.name}_#{mname}", country: country)
      
      # مسؤول نموذج
      Admin.create!(name: "#{model.name} Admin", email: "#{model.name.downcase}_admin@youkyouk.com", continent: country.continent, country: country, model: model)
      
      # مستثمر كامل المستوى
      Investor.create!(name: "#{model.name} Full Investor", email: "#{model.name.downcase}_full@youkyouk.com", investor_type: 'full_level', share_percentage: 100, continent: country.continent, country: country, model: model)
      
      # مستثمر حصة جزئية
      Investor.create!(name: "#{model.name} Partial Investor", email: "#{model.name.downcase}_partial@youkyouk.com", investor_type: 'partial_share', share_percentage: 30, continent: country.continent, country: country, model: model)
      
      # إضافة بعض الرحلات
      3.times do |i|
        trip = Trip.create!(start_location: "Start#{i}", end_location: "End#{i}", departure_time: Time.now + i.hours, country: country, model: model)
        
        # إضافة ركاب
        2.times do |p|
          passenger = Passenger.create!(name: "Passenger#{i}_#{p}", email: "passenger#{i}_#{p}@example.com")
          TripPassenger.create!(trip: trip, passenger: passenger)
        end
        
        # إضافة سائق
        driver = Driver.create!(name: "Driver#{i}", email: "driver#{i}@example.com")
        TripDriver.create!(trip: trip, driver: driver)
      end
    end
  end
end

puts "تم إنشاء الهيكل الهرمي، المسؤولين، المستثمرين، الركاب، السائقين، والرحلات بالكامل."
