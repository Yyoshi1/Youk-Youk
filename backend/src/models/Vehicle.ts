import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Driver } from "./Driver";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: "car" | "small_truck" | "large_truck" | "electric_bike";

  @Column()
  plateNumber: string;

  @ManyToOne(() => Driver, (driver) => driver.vehicles)
  driver: Driver;
}
