#!/bin/bash

# ===========================
# Youkyouk Installation Script
# ===========================

echo "Starting Youkyouk installation..."

# 1️⃣ تحديث النظام وتثبيت الحزم المطلوبة
sudo apt update && sudo apt upgrade -y
sudo apt install -y postgresql postgresql-contrib git curl build-essential

# 2️⃣ إعداد قاعدة البيانات
sudo -u postgres psql -c "CREATE USER youkyouk_user WITH PASSWORD 'secure_password';"
sudo -u postgres psql -c "CREATE DATABASE youkyouk_db OWNER youkyouk_user;"

# 3️⃣ تثبيت Ruby & Bundler
sudo apt install -y rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0
gem install bundler

# 4️⃣ تثبيت الجواهر
bundle install

# 5️⃣ إعداد قواعد البيانات
rails db:create
rails db:migrate

echo "Installation completed successfully!"
