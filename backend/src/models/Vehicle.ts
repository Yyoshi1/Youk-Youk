import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ride } from "./Ride";

export enum VehicleType {
  CAR = "car",
  SMALL_TRUCK = "small_truck",
  LARGE_TRUCK = "large_truck",
  ELECTRIC_BIKE = "electric_bike",
}

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: VehicleType,
    default: VehicleType.CAR,
  })
  type: VehicleType;

  @Column()
  imageUrl: string;

  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  basePrice: number;

  @OneToMany(() => Ride, (ride) => ride.vehicle)
  rides: Ride[];
}
