import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Module } from "./Module";
import { Ride } from "./Ride";

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

  @OneToMany(() => Module, (module) => module.country)
  modules: Module[];

  @OneToMany(() => Ride, (ride) => ride.country)
  rides: Ride[];
}
