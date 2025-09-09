import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Ride } from "./Ride";
import { Country } from "./Country";

export type VehicleType = "car" | "small_truck" | "big_truck" | "electric_bike";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "enum", enum: ["car", "small_truck", "big_truck", "electric_bike"] })
  type: VehicleType;

  @Column({ type: "varchar", length: 200, nullable: true })
  imageUrl: string;

  @ManyToOne(() => User, { eager: true })
  owner: User;

  @ManyToOne(() => Country)
  country: Country;

  @OneToMany(() => Ride, (ride) => ride.vehicle)
  rides: Ride[];

  @Column({ type: "float", default: 0 })
  basePrice: number;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
