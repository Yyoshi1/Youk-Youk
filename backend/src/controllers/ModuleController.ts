import { Request, Response } from "express";
import { ModuleService } from "../services/ModuleService";

const moduleService = new ModuleService();

export class ModuleController {
  async create(req: Request, res: Response) {
    const module = await moduleService.create(req.body);
    res.json(module);
  }

  async getById(req: Request, res: Response) {
    const module = await moduleService.getById(Number(req.params.id));
    res.json(module);
  }

  async getAll(req: Request, res: Response) {
    const modules = await moduleService.getAll();
    res.json(modules);
  }

  async update(req: Request, res: Response) {
    const updated = await moduleService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await moduleService.delete(Number(req.params.id));
    res.json({ message: "Module deleted successfully" });
  }
}
