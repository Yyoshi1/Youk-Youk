import { Request, Response } from "express";
import { RideService } from "../services/RideService";

const rideService = new RideService();

export class RideController {
  async create(req: Request, res: Response) {
    const ride = await rideService.create(req.body);
    res.json(ride);
  }

  async getById(req: Request, res: Response) {
    const ride = await rideService.getById(Number(req.params.id));
    res.json(ride);
  }

  async getAll(req: Request, res: Response) {
    const rides = await rideService.getAll();
    res.json(rides);
  }

  async update(req: Request, res: Response) {
    const updated = await rideService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await rideService.delete(Number(req.params.id));
    res.json({ message: "Ride deleted successfully" });
  }
}
