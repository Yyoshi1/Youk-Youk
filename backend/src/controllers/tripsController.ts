import { Trip } from "../models/Trip";
import { getRepository } from "typeorm";
import { calculatePrice } from "../services/dynamicPricing";

export async function createTrip(req, res) {
  const tripRepo = getRepository(Trip);
  const { type, origin, destination, basePrice, passengerId } = req.body;
  const demandMultiplier = 1.2; // Example dynamic demand factor
  const price = calculatePrice(basePrice, type, demandMultiplier);

  const trip = tripRepo.create({ type, origin, destination, price, passenger: { id: passengerId } });
  await tripRepo.save(trip);
  res.json(trip);
}
