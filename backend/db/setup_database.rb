# frozen_string_literal: true

require 'pg'

# إعداد الاتصال بقاعدة بيانات PostgreSQL
conn = PG.connect(
  dbname: 'youkyouk_db',
  user: 'your_pg_user',    # استبدل باسم المستخدم
  password: 'your_pg_pass' # استبدل بكلمة المرور
)

puts "Connected to PostgreSQL successfully."

# 1️⃣ جدول القارات والدول والنماذج
conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS continents (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE
);
SQL

conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE,
    continent_id INT REFERENCES continents(id) ON DELETE CASCADE
);
SQL

conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS models (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country_id INT REFERENCES countries(id) ON DELETE CASCADE
);
SQL

# 2️⃣ جدول المسؤولين
conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE,
    role VARCHAR(50) NOT NULL,
    parent_id INT REFERENCES admins(id) ON DELETE CASCADE,
    continent_id INT,
    country_id INT,
    model_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SQL

# 3️⃣ جدول المستثمرين
conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS investors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    level_type VARCHAR(50),
    level_id INT,
    share_percentage DECIMAL,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SQL

# 4️⃣ جدول الركاب والسائقين والرحلات
conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS passengers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    model_id INT REFERENCES models(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SQL

conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS drivers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    model_id INT REFERENCES models(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SQL

conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS trips (
    id SERIAL PRIMARY KEY,
    model_id INT REFERENCES models(id) ON DELETE CASCADE,
    driver_id INT,
    passenger_id INT,
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    status VARCHAR(50) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SQL

# 5️⃣ جدول المساعدين
conn.exec <<-SQL
CREATE TABLE IF NOT EXISTS admin_assistants (
    id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES admins(id) ON DELETE CASCADE,
    assistant_id INT REFERENCES admins(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SQL

puts "Database setup completed successfully."

conn.close
