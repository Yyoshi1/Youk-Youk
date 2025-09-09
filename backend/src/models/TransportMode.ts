import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Driver } from "./Driver";
import { Ride } from "./Ride";

/**
 * TransportMode entity represents a vehicle or transport type.
 * - Examples: car, small truck, large truck, electric bike
 */
@Entity()
export class TransportMode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // car, small truck, large truck, electric bike

  @Column()
  imageUrl: string; // vehicle image

  @ManyToOne(() => Driver, (driver) => driver.vehicles)
  driver: Driver;

  @OneToMany(() => Ride, (ride) => ride.transportMode)
  rides: Ride[];
}
