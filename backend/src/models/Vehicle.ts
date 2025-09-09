import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Ride } from "./Ride";
import { Country } from "./Country";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string; // : "Economy Car", "VIP Car", "Motorbike"

  @Column({ type: "varchar", length: 100 })
  type: string; // car, truck, motorbike, van, etc.

  @Column({ type: "float", default: 0 })
  basePrice: number; // 

  @Column({ type: "varchar", length: 255, nullable: true })
  imageUrl: string; // 

  @Column({ type: "boolean", default: true })
  isActive: boolean; // 

  @ManyToOne(() => Country, (country) => country.vehicles)
  country: Country;

  @OneToMany(() => Ride, (ride) => ride.vehicle)
  rides: Ride[];
}
