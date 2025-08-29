# frozen_string_literal: true
require_relative '../models/continent'
require_relative '../models/country'
require_relative '../models/model'
require_relative '../models/admin'
require_relative '../models/investor'

# Helper لإنشاء المسؤولين والمساعدين
def create_admin(name:, role:, continent: nil, country: nil, model: nil, supervisor: nil)
  Admin.create!(
    name: name,
    role: role,
    email: "#{name.downcase.gsub(' ', '_')}@youkyouk.com",
    continent: continent,
    country: country,
    model: model,
    supervisor: supervisor
  )
end

# Helper لإنشاء المستثمرين
def create_investor(name:, investor_type:, share_percentage:, continent: nil, country: nil, model: nil)
  Investor.create!(
    name: name,
    email: "#{name.downcase.gsub(' ', '_')}@investor.com",
    investor_type: investor_type,
    share_percentage: share_percentage,
    continent: continent,
    country: country,
    model: model
  )
end

# -------------------------
# 1️⃣ إنشاء القارات
continents = ['Africa', 'Europe', 'Asia'].map do |name|
  Continent.create!(name: name)
end

# 2️⃣ إنشاء الدول لكل قارة
continents.each do |continent|
  ['Country1', 'Country2'].each do |c_name|
    Country.create!(name: "#{c_name}_#{continent.name}", continent: continent)
  end
end

# 3️⃣ إنشاء النماذج لكل دولة
Country.all.each do |country|
  ['ModelA', 'ModelB'].each do |m_name|
    Model.create!(name: "#{m_name}_#{country.name}", country: country)
  end
end

# -------------------------
# 4️⃣ إنشاء المسؤول الأعلى
super_admin = create_admin(name: 'Super Admin', role: 'super_admin')

# 5️⃣ إنشاء مسؤولي القارات والدول والنماذج
continents.each do |continent|
  continent_admin = create_admin(name: "#{continent.name} Admin", role: 'continent_admin', continent: continent, supervisor: super_admin)

  continent.countries.each do |country|
    country_admin = create_admin(name: "#{country.name} Admin", role: 'country_admin', country: country, supervisor: continent_admin)

    country.models.each do |model|
      model_admin = create_admin(name: "#{model.name} Admin", role: 'model_admin', model: model, supervisor: country_admin)
    end
  end
end

# -------------------------
# 6️⃣ إنشاء المستثمرين لكل مستوى
continents.each do |continent|
  create_investor(name: "#{continent.name} Investor Full", investor_type: 'full_level', share_percentage: 100, continent: continent)
  create_investor(name: "#{continent.name} Investor Partial", investor_type: 'partial_share', share_percentage: 50, continent: continent)

  continent.countries.each do |country|
    create_investor(name: "#{country.name} Investor Full", investor_type: 'full_level', share_percentage: 100, country: country)
    create_investor(name: "#{country.name} Investor Partial", investor_type: 'partial_share', share_percentage: 25, country: country)

    country.models.each do |model|
      create_investor(name: "#{model.name} Investor Full", investor_type: 'full_level', share_percentage: 100, model: model)
      create_investor(name: "#{model.name} Investor Partial", investor_type: 'partial_share', share_percentage: 10, model: model)
    end
  end
end

puts "✅ الهيكل الهرمي، المسؤولين والمستثمرين تم إنشاؤه بالكامل!"
