import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from "./Trip";
import { Vehicle } from "./Vehicle";

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Trip, (trip) => trip.driver)
  trips: Trip[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
  vehicles: Vehicle[];
}
