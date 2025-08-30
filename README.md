# Youkyouk Project

**Version:** 1.0.0  
**Author:** Abdeljalil Doua  
**License:** MIT License  

---

## 1. Overview

**Youkyouk** is a comprehensive system designed for managing ride services and multi-domain applications across countries and models. It provides a complete platform to manage passengers, drivers, investors, and administrators with advanced functionalities.  

The system includes:  

- Mobile applications for passengers and drivers.  
- Web applications for users and investors with dedicated dashboards.  
- Advanced dashboards for administrators and investors at full or partial control levels.  
- Multi-continent, multi-country, and multi-model support, with separate domains for each model.  
- Multi-language support (Arabic, French, English) and multi-currency support.  
- Advanced commission management system for drivers, distributing commissions between the system, parent driver, and subordinate drivers.  
- Add-ons support (activate/deactivate) such as: stop-time accounting, price negotiation system, instant messaging, and real-time notifications.  
- Security enhancements to prevent hacking, tampering, or unauthorized access.  
- Page caching and prefetching for faster access to frequently visited pages.  
- Embedded template editor for drivers and investors to customize mobile app layouts without affecting the main system.  
- Maps, GPS tracking, and route visualization between passengers and drivers, with live trip previews.  

---

## 2. Project Structure (Detailed)

Youkyouk/
│
├── .env                        # Core system settings (Database, API keys, etc.)
├── install.sh                   # Full installation script
├── README.md                    # Project documentation
├── LICENSE                      # MIT License file
│
├── frontend/                    # User interfaces for mobile and web apps
│   ├── MobileApp/
│   │   ├── PassengerMode/       # Passenger mobile app
│   │   │   ├── screens/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── hooks/
│   │   └── DriverMode/          # Driver mobile app
│   │       ├── screens/
│   │       ├── components/
│   │       ├── services/
│   │       └── hooks/
│   └── WebApp/                  # Web application
│       ├── pages/
│       ├── components/
│       ├── services/
│       └── store/

├── backend/
│   ├── core/
│   │   ├── models/              # Admin, Passenger, Driver, Trip, Template, Investor
│   │   ├── controllers/         # Business logic
│   │   ├── db/
│   │   │   ├── migrate/         # Database migration scripts
│   │   │   └── seeds.rb         # Sample data
│   │   ├── services/            # Payments, Notifications, Maps, Logging
│   │   └── jobs/                # Background tasks (Retry, Notifications, Template Updates)

├── Public/Website/              # Public web files
├── Docs/                        # Documentation for Admins and Investors
├── Investors/                   # Investor-related files
├── Trips/                       # Trips management
├── Logs/                        # Application and error logs
├── Config/                       # Config files (Database, Secrets, Application)
└── System Structure/
    ├── SuperAdmin/              # Top-level administrator dashboard
    ├── Continent Level/
    │   ├── Continent Admins/
    │   ├── Investors/
    │   │   ├── Full Level/
    │   │   └── Partial Share/
    │   └── Countries/
    │       ├── Country Admins/
    │       ├── Investors/
    │       │   ├── Full Level/
    │       │   └── Partial Share/
    │       └── Models/
    │           ├── Model Admins/
    │           ├── Investors/
    │           │   ├── Full Level/
    │           │   └── Partial Share/
    │           └── Trips/
    │               ├── Riders/
    │               └── Drivers/
    └── System Enhancements/
        ├── Role & Permission Management
        ├── Audit Logs
        ├── API Versioning (v1, v2)
        ├── WebSocket / Push Notifications
        ├── Swagger/OpenAPI Documentation
        ├── Multi-country support
        ├── Multi-language support
        ├── Payment Gateways
        ├── Dynamic Templates for Investors/Brokers
        ├── Admin Dashboard Analytics
        ├── Passenger/Sender Stop Time Accounting Add-on
        ├── Page Caching & Prefetching
        └── Security Enhancements (Web Tampering Prevention, Session Validation, Encrypted Storage)

---

## 3. System Requirements

- Ruby 3.3.x  
- Rails 7.x  
- PostgreSQL 15.x or higher  
- Redis (optional, for background jobs and caching)  
- Node.js 20.x (for Webpacker / frontend asset compilation if required)  
- Yarn or NPM  

> Note: Node.js is optional, as the system primarily relies on Ruby/Rails. Node.js is only needed if frontend assets compilation is required.

---

## 4. Installation Guide

1. **Clone the repository**

```bash
git clone https://github.com/youkyouk/youkyouk.git
cd youkyouk
```

2. **Install Ruby dependencies**

```bash
gem install bundler
bundle install
```

3. **Database setup**

- Configure your `.env` file with database credentials:

```
DATABASE_URL=postgres://username:password@localhost:5432/youkyouk_db
```

- Create and migrate the database:

```bash
rails db:create
rails db:migrate
rails db:seed
```

4. **Install frontend dependencies (if needed)**

```bash
cd frontend/WebApp
yarn install
# or
npm install
```

5. **Run the server**

```bash
rails server
```

6. **Access the application**

- Web: http://localhost:3000  
- Mobile apps: Follow the instructions in the MobileApp folder to run on simulator or device.

---

## 5. License

This project is licensed under the **MIT License – Youkyouk**. See the [LICENSE](LICENSE) file for details.

---

## 6. Contributions

We welcome contributions! Please follow the standard GitHub fork & pull request workflow. Ensure all contributions respect the MIT license and provide proper attribution to the project **Youkyouk**.

---

## 7. Support

For issues or support, contact **Abdeljalil Doua** via the repository issues tab or email provided in the documentation.
