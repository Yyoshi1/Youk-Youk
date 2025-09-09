import { TransportMode } from "../models/TransportMode";
import { getRepository } from "typeorm";

export class TransportModeService {
  private repo = getRepository(TransportMode);

  async create(data: Partial<TransportMode>) {
    const mode = this.repo.create(data);
    return this.repo.save(mode);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<TransportMode>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
