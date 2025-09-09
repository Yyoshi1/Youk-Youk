import { Module } from "../models/Module";
import { getRepository } from "typeorm";

export class ModuleService {
  private repo = getRepository(Module);

  async create(data: Partial<Module>) {
    const module = this.repo.create(data);
    return this.repo.save(module);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<Module>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
