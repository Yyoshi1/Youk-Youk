import { User } from "../models/User";
import { getRepository } from "typeorm";

export class UserService {
  private repo = getRepository(User);

  async create(data: Partial<User>) {
    const user = this.repo.create(data);
    return this.repo.save(user);
  }

  async getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getAll() {
    return this.repo.find();
  }

  async update(id: number, data: Partial<User>) {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
