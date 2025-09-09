import { Request, Response } from "express";
import { CountryService } from "../services/CountryService";

const countryService = new CountryService();

export class CountryController {
  async create(req: Request, res: Response) {
    const country = await countryService.create(req.body);
    res.json(country);
  }

  async getById(req: Request, res: Response) {
    const country = await countryService.getById(Number(req.params.id));
    res.json(country);
  }

  async getAll(req: Request, res: Response) {
    const countries = await countryService.getAll();
    res.json(countries);
  }

  async update(req: Request, res: Response) {
    const updated = await countryService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    await countryService.delete(Number(req.params.id));
    res.json({ message: "Country deleted successfully" });
  }
}
