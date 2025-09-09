#!/bin/bash

# ==========================
# سكربت تثبيت كامل لمشروع Youkyouk
# ==========================

echo "بدء التثبيت..."

# 1️⃣ تحديث النظام
sudo apt update && sudo apt upgrade -y

# 2️⃣ تثبيت Node.js و npm
echo "تثبيت Node.js و npm..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3️⃣ تثبيت PostgreSQL
echo "تثبيت PostgreSQL..."
sudo apt install -y postgresql postgresql-contrib
sudo systemctl enable postgresql
sudo systemctl start postgresql

# إنشاء قاعدة بيانات رئيسية
sudo -u postgres psql -c "CREATE DATABASE youkyouk_platform;"
sudo -u postgres psql -c "CREATE USER youkyouk_user WITH ENCRYPTED PASSWORD 'youkyouk_pass';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE youkyouk_platform TO youkyouk_user;"

# 4️⃣ تثبيت Flutter (Mobile App)
echo "تثبيت Flutter..."
git clone https://github.com/flutter/flutter.git -b stable ~/flutter
export PATH="$PATH:$HOME/flutter/bin"

# 5️⃣ تثبيت Yarn
npm install -g yarn

# 6️⃣ Backend setup
echo "إعداد Backend..."
cd youkyouk/backend
npm install
npx typeorm migration:run
cd ../../

# 7️⃣ Admin Dashboard setup
echo "إعداد Admin Dashboard..."
cd youkyouk/frontend/admin
yarn install
yarn build
cd ../../

# 8️⃣ Landing Page setup
echo "إعداد Landing Page..."
cd youkyouk/frontend/landing
yarn install
yarn build
cd ../../

# 9️⃣ Mobile App setup
echo "إعداد Mobile App..."
cd youkyouk/mobile_app
flutter pub get
cd ../

# 🔟 تشغيل Backend
echo "تشغيل Backend..."
cd youkyouk/backend
npm run start &
cd ../

# 1️⃣1️⃣ تشغيل Admin Dashboard
echo "تشغيل Admin Dashboard..."
cd youkyouk/frontend/admin
yarn start &
cd ../../

# 1️⃣2️⃣ تشغيل Landing Page
echo "تشغيل Landing Page..."
cd youkyouk/frontend/landing
yarn start &
cd ../../

echo "✅ التثبيت اكتمل! كل المكونات تعمل الآن."
echo "Backend: http://localhost:4000"
echo "Admin Dashboard: http://localhost:3000"
echo "Landing Page: http://localhost:3001"
