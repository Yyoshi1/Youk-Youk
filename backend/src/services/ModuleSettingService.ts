import { ModuleSetting } from "../models/ModuleSetting";
import { getRepository } from "typeorm";

export class ModuleSettingService {
  private repo = getRepository(ModuleSetting);

  async create(data: Partial<ModuleSetting>) {
    const setting = this.repo.create(data);
    return this.repo.save(setting);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<ModuleSetting>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
