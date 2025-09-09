import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const userService = new UserService();

export class UserController {
  async create(req: Request, res: Response) {
    const user = await userService.create(req.body);
    res.json(user);
  }

  async getById(req: Request, res: Response) {
    const user = await userService.getById(Number(req.params.id));
    res.json(user);
  }

  async getAll(req: Request, res: Response) {
    const users = await userService.getAll();
    res.json(users);
  }

  async update(req: Request, res: Response) {
    const updated = await userService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await userService.delete(Number(req.params.id));
    res.json({ message: "User deleted successfully" });
  }
}
