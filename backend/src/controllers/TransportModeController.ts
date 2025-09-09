import { Request, Response } from "express";
import { TransportModeService } from "../services/TransportModeService";

const transportModeService = new TransportModeService();

export class TransportModeController {
  async create(req: Request, res: Response) {
    const mode = await transportModeService.create(req.body);
    res.json(mode);
  }

  async getById(req: Request, res: Response) {
    const mode = await transportModeService.getById(Number(req.params.id));
    res.json(mode);
  }

  async getAll(req: Request, res: Response) {
    const modes = await transportModeService.getAll();
    res.json(modes);
  }

  async update(req: Request, res: Response) {
    const updated = await transportModeService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await transportModeService.delete(Number(req.params.id));
    res.json({ message: "TransportMode deleted successfully" });
  }
}
