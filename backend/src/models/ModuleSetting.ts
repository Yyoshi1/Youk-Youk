import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Module } from "./Module";
import { Country } from "./Country";

@Entity()
export class ModuleSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Module, (module) => module.settings)
  module: Module;

  @ManyToOne(() => Country, (country) => country.moduleSettings)
  country: Country;

  @Column({ default: true })
  isActive: boolean;
}
