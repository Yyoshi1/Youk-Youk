#!/bin/bash

echo "بدء تثبيت مشروع Youkyouk..."

# تحديث النظام
sudo apt update && sudo apt upgrade -y

# تثبيت Ruby و Rails و Bundler
sudo apt install -y ruby-full build-essential zlib1g-dev
gem install rails bundler

# تثبيت PostgreSQL
sudo apt install -y postgresql postgresql-contrib libpq-dev

# إعداد قاعدة البيانات
echo "إنشاء قاعدة البيانات..."
sudo -u postgres psql -c "CREATE DATABASE youkyouk_db;"

# تثبيت التبعيات
bundle install

# تهيئة قاعدة البيانات
rails db:create db:migrate db:seed

echo "تم تثبيت مشروع Youkyouk بنجاح!"
