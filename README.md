# Youkyouk Project

**Version:** 1.0.0  
**Author:** Abdeljalil Doua  
**License:** MIT License  

---

## **1. Overview**

Youkyouk is a comprehensive system for managing ride services and multi-domain applications across countries and models. It is a complete platform for managing passengers, drivers, investors, and administrators. The system includes:  

- Mobile applications for passengers and drivers.  
- Web applications for each user and investor, with dedicated dashboards.  
- Advanced dashboards for administrators and investors at full or partial levels.  
- Multi-continent, multi-country, and multi-model support, with domains for each model.  
- Multi-language support (Arabic, French, English) and multi-currency support.  
- Advanced commission management system for drivers, distributing commissions between the system, parent driver, and subordinate drivers.  
- Support for add-ons that can be activated/deactivated, such as: stop-time accounting, price negotiation system, instant messaging, and real-time notifications.  
- Security enhancements to prevent hacking, tampering, or unauthorized web access.  
- Page caching and prefetching to improve user experience and speed up frequently accessed pages.  
- Embedded template editor for drivers and investors to customize mobile app layouts without affecting the main application.  
- Maps, GPS tracking, and route drawing between passengers and drivers, with live trip previews.  

---

## **2. Project Structure (Detailed)**

Youkyouk/
│
├── .env                        # Core system settings (Database, API keys, etc.)
├── install.sh                   # Full installation script
├── README.md                    # Full project documentation
├── LICENSE                      # MIT License file
├── package.json                 # Node.js project settings and dependencies
├── package-lock.json            # Locked package versions
│
├── frontend/                    # User interfaces for mobile and web apps
│   ├── MobileApp/
│   │   ├── PassengerMode/       # Passenger mode
│   │   │   ├── screens/
│   │   │   │   ├── Home.js
│   │   │   │   ├── Trips.js
│   │   │   │   ├── Profile.js
│   │   │   │   └── Chat.js
│   │   │   ├── components/      # UI components (Buttons, Cards, Maps)
│   │   │   ├── services/        # Services (API calls, Notifications, Maps)
│   │   │   └── hooks/           # Hooks for dynamic features (GPS, Notifications, State)
│   │   │
│   │   └── DriverMode/          # Driver mode
│   │       ├── screens/
│   │       │   ├── Dashboard.js
│   │       │   ├── Trips.js
│   │       │   └── Earnings.js
│   │       ├── components/      # Components like Map, TripCard, Forms
│   │       ├── services/        # API, GPS, Notifications
│   │       └── hooks/           # Hooks for driver GPS, maps, trips
│   │
│   └── WebApp/                  # Web application
│       ├── pages/
│       │   ├── Dashboard.vue
│       │   ├── Trips.vue
│       │   ├── Users.vue
│       │   ├── Settings.vue
│       │   ├── Home.vue
│       │   ├── Profile.vue
│       │   └── Chat.vue
│       ├── components/          # Shared UI components
│       │   ├── Layout/          # Navbar, Sidebar, Footer
│       │   ├── Forms/           # Form components
│       │   ├── Tables/          # Table components
│       │   └── Modals/          # Modals for confirmation, alerts, messages
│       ├── services/            # Shared services (API, Auth, Maps)
│       └── store/               # State management (Vuex/Redux)
│
├── backend/
│   ├── core/
│   │   ├── models/              # Tables and objects (Admin, Passenger, Driver, Trip, Template, Investor)
│   │   ├── controllers/         # Request handling and business logic
│   │   ├── db/
│   │   │   ├── migrate/         # Database migration scripts
│   │   │   └── seeds.rb         # Sample data
│   │   ├── services/            # Internal services (Payments, Maps, Notifications, Logging, ZIP Protection)
│   │   └── jobs/                # Background tasks (Retry, Notifications, Template Updates)
│
├── Public/Website/              # Publicly accessible web files
├── Docs/                        # Documentation for SuperAdmin, ContinentAdmin, CountryAdmin, ModelAdmin, Investors
├── Investors/                   # Investors files with full or partial control
├── Trips/                       # Trips management per country and model
├── Logs/                        # Application and error logs
├── Config/                       # Configuration files (Database, Secrets, Application)
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
        └── Security Enhancements (Prevent Web Tampering, Session Validation, Encrypted Storage)
