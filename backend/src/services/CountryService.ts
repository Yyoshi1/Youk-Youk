import { Country } from "../models/Country";
import { getRepository } from "typeorm";

export class CountryService {
  private repo = getRepository(Country);

  async create(data: Partial<Country>) {
    const country = this.repo.create(data);
    return this.repo.save(country);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<Country>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
