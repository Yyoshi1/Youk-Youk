import { Ride } from "../models/Ride";
import { getRepository } from "typeorm";

export class RideService {
  private repo = getRepository(Ride);

  async create(data: Partial<Ride>) {
    const ride = this.repo.create(data);
    return this.repo.save(ride);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<Ride>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
