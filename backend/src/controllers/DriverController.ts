import { Request, Response } from "express";
import { DriverService } from "../services/DriverService";

const driverService = new DriverService();

export class DriverController {
  async create(req: Request, res: Response) {
    const driver = await driverService.create(req.body);
    res.json(driver);
  }

  async getById(req: Request, res: Response) {
    const driver = await driverService.getById(Number(req.params.id));
    res.json(driver);
  }

  async getAll(req: Request, res: Response) {
    const drivers = await driverService.getAll();
    res.json(drivers);
  }

  async update(req: Request, res: Response) {
    const updated = await driverService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await driverService.delete(Number(req.params.id));
    res.json({ message: "Driver deleted successfully" });
  }
}
