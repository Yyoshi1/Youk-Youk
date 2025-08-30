# Youkyouk Project

**Version:** 1.0.0  
**Author:** Abdeljalil Doua  
**License:** MIT License – Youkyouk  

## 1. Overview

**Youkyouk** is a comprehensive system for managing ride services and multi-domain applications across countries and models. It provides a complete platform to manage passengers, drivers, investors, and administrators with advanced functionalities.  

Key features:

- Mobile applications for passengers and drivers.  
- Web applications for users and investors with dedicated dashboards.  
- Advanced dashboards for administrators and investors at full or partial control levels.  
- Multi-continent, multi-country, and multi-model support, with separate domains for each model.  
- Multi-language support (Arabic, French, English) and multi-currency support.  
- Advanced commission management system for drivers, distributing commissions between the system, parent driver, and subordinate drivers.  
- Add-ons support (activate/deactivate), such as: stop-time accounting, price negotiation system, instant messaging, and real-time notifications.  
- Security enhancements to prevent hacking, tampering, or unauthorized access.  
- Page caching and prefetching for faster access to frequently visited pages.  
- Embedded template editor for drivers and investors to customize mobile app layouts.  
- Maps, GPS tracking, and route visualization with live trip previews.  

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
│   │   ├── PassengerMode/
│   │   │   ├── screens/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── hooks/
│   │   └── DriverMode/
│   │       ├── screens/
│   │       ├── components/
│   │       ├── services/
│   │       └── hooks/
│   └── WebApp/
│       ├── pages/
│       ├── components/
│       ├── services/
│       └── store/
│
├── backend/
│   ├── core/
│   │   ├── models/              # Admin, Passenger, Driver, Trip, Template, Investor
│   │   ├── controllers/         # Business logic
│   │   ├── db/
│   │   │   ├── migrate/         # Database migration scripts
│   │   │   └── seeds.rb         # Sample data
│   │   ├── services/            # Payments, Notifications, Maps, Logging
│   │   └── jobs/                # Background tasks (Retry, Notifications, Template Updates)
│
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


## 3. System Requirements

- Ruby 3.3.x  
- Rails 7.x  
- PostgreSQL 15.x or higher  
- Redis (optional, for background jobs and caching)  

> Note: Node.js is optional and only needed if frontend assets compilation is required.

## 4. Installation Guide

1. **Clone the repository**

```bash
git clone https://github.com/Yyoshi1/youkyouk.git
cd youkyouk

2. Install Ruby dependencies

gem install bundler
bundle install

3. Database setup

Configure your .env file:

DB_ADAPTER=postgresql
DB_HOST=localhost
DB_PORT=5432
DB_NAME=youkyouk_development
DB_USERNAME=youkyouk_user
DB_PASSWORD=StrongPassword123!

Create and migrate the database:

rails db:create
rails db:migrate
rails db:seed

4. Run the server

rails server

Web access: http://localhost:3000

Mobile apps: Follow instructions in the MobileApp folder for simulators or devices.

5. License

This project is licensed under the MIT License – Youkyouk. See the LICENSE file for details.

6. Contributions

Contributions are welcome! Please use GitHub fork & pull request workflow. Ensure all contributions respect the MIT license and credit Youkyouk.

7. Support

For issues or support, contact Abdeljalil Doua via repository issues or the email in the documentation.



      
