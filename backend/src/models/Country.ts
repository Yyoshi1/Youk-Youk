import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { Module } from "./Module";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 10 })
  currency: string;

  @Column({ type: "varchar", length: 10 })
  defaultLanguage: string;

  @OneToMany(() => User, (user) => user.country)
  users: User[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.country)
  vehicles: Vehicle[];

  @OneToMany(() => Module, (module) => module.country)
  modules: Module[];
}
