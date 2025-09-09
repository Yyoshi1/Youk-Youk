import { Trip } from "../models/Trip";
import { Driver } from "../models/Driver";

export async function suggestDriver(trip: Trip, drivers: Driver[]) {
  // Simple AI logic: assign driver with least trips
  drivers.sort((a, b) => a.trips.length - b.trips.length);
  return drivers[0];
}

export function suggestVIPTrips(trips: Trip[]) {
  // Return top 5 highest demand trips for VIP suggestion
  return trips.sort((a, b) => b.price - a.price).slice(0, 5);
}
