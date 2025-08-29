# frozen_string_literal: true
require_relative '../models/continent'
require_relative '../models/country'
require_relative '../models/model'
require_relative '../models/admin'
require_relative '../models/investor'

# ==== 1️⃣ إنشاء الهيكل الهرمي ====

# مسؤول أعلى
super_admin = Admin.create!(name: "Super Admin", role: "superadmin", email: "superadmin@youkyouk.com")

# أمثلة على القارات
continents = %w[Africa Europe Asia]
continents.each do |cont_name|
  continent = Continent.create!(name: cont_name)
  
  # مسؤول القارة والمساعدين
  Admin.create!(name: "#{cont_name} Admin", role: "continent_admin", email: "#{cont_name.downcase}_admin@youkyouk.com", continent: continent)
  
  # أمثلة على الدول داخل القارة
  countries = ["#{cont_name} Country1", "#{cont_name} Country2"]
  countries.each do |country_name|
    country = Country.create!(name: country_name, continent: continent)
    
    # مسؤول الدولة والمساعدين
    Admin.create!(name: "#{country_name} Admin", role: "country_admin", email: "#{country_name.downcase}_admin@youkyouk.com", country: country)
    
    # أمثلة على النماذج داخل الدولة
    models = ["#{country_name} Model1", "#{country_name} Model2"]
    models.each do |model_name|
      model = Model.create!(name: model_name, country: country)
      
      # مسؤول النموذج والمساعدين
      Admin.create!(name: "#{model_name} Admin", role: "model_admin", email: "#{model_name.downcase}_admin@youkyouk.com", model: model)
    end
  end
end

# ==== 2️⃣ إنشاء المستثمرين على كل مستوى ====

# على مستوى القارات
Continent.all.each do |continent|
  Investor.create!(name: "#{continent.name} Full Investor", investor_type: "full_level", continent: continent, email: "full_#{continent.name.downcase}@youkyouk.com", share_percentage: 100)
  Investor.create!(name: "#{continent.name} Partial Investor", investor_type: "partial_share", continent: continent, email: "partial_#{continent.name.downcase}@youkyouk.com", share_percentage: 50)
end

# على مستوى الدول
Country.all.each do |country|
  Investor.create!(name: "#{country.name} Full Investor", investor_type: "full_level", country: country, email: "full_#{country.name.downcase}@youkyouk.com", share_percentage: 100)
  Investor.create!(name: "#{country.name} Partial Investor", investor_type: "partial_share", country: country, email: "partial_#{country.name.downcase}@youkyouk.com", share_percentage: 50)
end

# على مستوى النماذج
Model.all.each do |model|
  Investor.create!(name: "#{model.name} Full Investor", investor_type: "full_level", model: model, email: "full_#{model.name.downcase}@youkyouk.com", share_percentage: 100)
  Investor.create!(name: "#{model.name} Partial Investor", investor_type: "partial_share", model: model, email: "partial_#{model.name.downcase}@youkyouk.com", share_percentage: 50)
end

puts "✅ الهيكل الهرمي وجميع المستثمرين تم إنشاؤهم بنجاح!"
