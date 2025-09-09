import { DataSource } from "typeorm";
import { Country } from "../models/Country";
import { User } from "../models/User";
import { Trip } from "../models/Trip";
import { Module } from "../models/Module";

export async function seedDemoData(dataSource: DataSource) {
  // إنشاء دول متعددة
  const countries = ["Morocco", "France", "USA"];
  for (const name of countries) {
    const country = new Country();
    country.name = name;
    country.language = name === "Morocco" ? "fr" : "en";
    await dataSource.manager.save(country);

    // تفعيل Modules لكل دولة
    const modules = ["VIP", "Shared", "Eco", "Delivery", "DynamicPricing"];
    for (const m of modules) {
      const module = new Module();
      module.name = m;
      module.active = true;
      module.country = country;
      await dataSource.manager.save(module);
    }

    // إنشاء مستخدم تجريبي
    const user = new User();
    user.name = `${name} Demo User`;
    user.email = `${name.toLowerCase()}@demo.com`;
    user.password = "demo123";
    user.country = country;
    await dataSource.manager.save(user);

    // إنشاء رحلات تجريبية
    for (let i = 0; i < 5; i++) {
      const trip = new Trip();
      trip.user = user;
      trip.type = i % 2 === 0 ? "VIP" : "Eco";
      trip.origin = "Point A";
      trip.destination = "Point B";
      trip.country = country;
      await dataSource.manager.save(trip);
    }
  }

  console.log("✅ Demo Data + Multi-Country تم تهيئتها بنجاح");
}
