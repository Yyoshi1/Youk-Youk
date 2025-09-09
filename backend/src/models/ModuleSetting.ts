import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Module } from "./Module";

/**
 * ModuleSetting entity represents the configuration of a module.
 * - Allows specific settings per module per country
 */
@Entity()
export class ModuleSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Module)
  module: Module;

  @Column()
  key: string;

  @Column()
  value: string;
}
