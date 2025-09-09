import { AppDataSource } from "../data-source";
import { Country } from "../models/Country";
import { User } from "../models/User";
import { Trip } from "../models/Trip";
import { TransportMode } from "../models/TransportMode";

export const initDemoData = async () => {
  const countries = ["Morocco", "France", "USA"];
  const roles = ["Passenger", "Driver", "Admin"];
  const transportModes = ["Car", "SmallTruck", "BigTruck", "ElectricBike"];

  for (const countryName of countries) {
    const country = new Country();
    country.name = countryName;
    country.language = countryName === "Morocco" ? "fr" : "en";
    await AppDataSource.manager.save(country);

    // وسائل النقل لكل دولة
    for (const modeName of transportModes) {
      const mode = new TransportMode();
      mode.name = modeName;
      mode.active = true;
      await AppDataSource.manager.save(mode);
    }

    for (const role of roles) {
      const user = new User();
      user.name = `${countryName} Demo ${role}`;
      user.email = `${role.toLowerCase()}@${countryName.toLowerCase()}.com`;
      user.password = "demo123";
      user.role = role;
      user.country = country;
      await AppDataSource.manager.save(user);
    }

    const passengers = await AppDataSource.manager.find(User, { where: { role: "Passenger", country } });
    for (const passenger of passengers) {
      for (let i = 0; i < 3; i++) {
        const trip = new Trip();
        trip.user = passenger;
        trip.type = i % 2 === 0 ? "VIP" : "Eco";
        trip.origin = "Point A";
        trip.destination = "Point B";
        trip.country = country;
        trip.transportMode = transportModes[i % transportModes.length];
        await AppDataSource.manager.save(trip);
      }
    }
  }
};
