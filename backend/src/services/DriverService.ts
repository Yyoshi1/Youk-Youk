import { Driver } from "../models/Driver";
import { getRepository } from "typeorm";

export class DriverService {
  private repo = getRepository(Driver);

  async create(data: Partial<Driver>) {
    const driver = this.repo.create(data);
    return this.repo.save(driver);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<Driver>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
