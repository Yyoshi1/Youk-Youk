import { Request, Response } from "express";
import { ModuleSettingService } from "../services/ModuleSettingService";

const moduleSettingService = new ModuleSettingService();

export class ModuleSettingController {
  async create(req: Request, res: Response) {
    const setting = await moduleSettingService.create(req.body);
    res.json(setting);
  }

  async getById(req: Request, res: Response) {
    const setting = await moduleSettingService.getById(Number(req.params.id));
    res.json(setting);
  }

  async getAll(req: Request, res: Response) {
    const settings = await moduleSettingService.getAll();
    res.json(settings);
  }

  async update(req: Request, res: Response) {
    const updated = await moduleSettingService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await moduleSettingService.delete(Number(req.params.id));
    res.json({ message: "ModuleSetting deleted successfully" });
  }
}
