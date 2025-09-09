import { Request, Response } from "express";
import { AdminService } from "../services/AdminService";

const adminService = new AdminService();

export class AdminController {
  async create(req: Request, res: Response) {
    const admin = await adminService.create(req.body);
    res.json(admin);
  }

  async getById(req: Request, res: Response) {
    const admin = await adminService.getById(Number(req.params.id));
    res.json(admin);
  }

  async getAll(req: Request, res: Response) {
    const admins = await adminService.getAll();
    res.json(admins);
  }

  async update(req: Request, res: Response) {
    const updated = await adminService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await adminService.delete(Number(req.params.id));
    res.json({ message: "Admin deleted successfully" });
  }
}
