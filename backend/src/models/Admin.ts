import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Country } from "./Country";
import { Module } from "./Module";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @ManyToMany(() => Country)
  @JoinTable({
    name: "admin_countries",
    joinColumn: { name: "adminId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "countryId", referencedColumnName: "id" },
  })
  countries: Country[];

  @ManyToMany(() => Module)
  @JoinTable({
    name: "admin_modules",
    joinColumn: { name: "adminId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "moduleId", referencedColumnName: "id" },
  })
  modules: Module[];

  @Column({ type: "boolean", default: true })
  isSuperAdmin: boolean;
}
