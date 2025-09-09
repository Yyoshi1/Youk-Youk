import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Driver } from "./Driver";
import { Ride } from "./Ride";
import { Module } from "./Module";

/**
 * Country entity represents a country in the YoKyok system.
 * - name: Country name
 * - currency: Local currency
 * - defaultLanguage: Default language for users/drivers in this country
 * - modules: Active features/modules for this country
 */
@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  currency: string;

  @Column()
  defaultLanguage: string;

  @OneToMany(() => User, (user) => user.country)
  users: User[];

  @OneToMany(() => Driver, (driver) => driver.country)
  drivers: Driver[];

  @OneToMany(() => Ride, (ride) => ride.country)
  rides: Ride[];

  @OneToMany(() => Module, (module) => module.country)
  modules: Module[];
}
