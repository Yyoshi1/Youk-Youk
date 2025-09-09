import { Request, Response } from "express";
import { TripService } from "../services/TripService";

const tripService = new TripService();

export class TripController {
  async create(req: Request, res: Response) {
    const trip = await tripService.create(req.body);
    res.json(trip);
  }

  async getById(req: Request, res: Response) {
    const trip = await tripService.getById(Number(req.params.id));
    res.json(trip);
  }

  async getAll(req: Request, res: Response) {
    const trips = await tripService.getAll();
    res.json(trips);
  }

  async update(req: Request, res: Response) {
    const updated = await tripService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await tripService.delete(Number(req.params.id));
    res.json({ message: "Trip deleted successfully" });
  }
}
