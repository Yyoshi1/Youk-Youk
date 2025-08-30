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



      
