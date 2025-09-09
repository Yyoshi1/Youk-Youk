import { Request, Response } from "express";
import { VehicleService } from "../services/VehicleService";

const vehicleService = new VehicleService();

export class VehicleController {
  async create(req: Request, res: Response) {
    const vehicle = await vehicleService.create(req.body);
    res.json(vehicle);
  }

  async getById(req: Request, res: Response) {
    const vehicle = await vehicleService.getById(Number(req.params.id));
    res.json(vehicle);
  }

  async getAll(req: Request, res: Response) {
    const vehicles = await vehicleService.getAll();
    res.json(vehicles);
  }

  async update(req: Request, res: Response) {
    const updated = await vehicleService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await vehicleService.delete(Number(req.params.id));
    res.json({ message: "Vehicle deleted successfully" });
  }
}
