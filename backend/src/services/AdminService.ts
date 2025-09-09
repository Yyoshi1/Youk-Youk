import { Admin } from "../models/Admin";
import { getRepository } from "typeorm";

export class AdminService {
  private adminRepo = getRepository(Admin);

  async createAdmin(data: Partial<Admin>) {
    const admin = this.adminRepo.create(data);
    return this.adminRepo.save(admin);
  }

  async getAdminById(id: number) {
    return this.adminRepo.findOne({ where: { id } });
  }

  async getAllAdmins() {
    return this.adminRepo.find();
  }

  async updateAdmin(id: number, data: Partial<Admin>) {
    await this.adminRepo.update(id, data);
    return this.getAdminById(id);
  }

  async deleteAdmin(id: number) {
    return this.adminRepo.delete(id);
  }
}
