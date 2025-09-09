import { Trip } from "../models/Trip";
import { getRepository } from "typeorm";

export class TripService {
  private repo = getRepository(Trip);

  async create(data: Partial<Trip>) {
    const trip = this.repo.create(data);
    return this.repo.save(trip);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<Trip>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
