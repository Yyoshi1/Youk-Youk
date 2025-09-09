import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ride } from "./Ride";

@Entity()
export class TransportMode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // car, small_truck, big_truck, e-bike

  @Column({ nullable: true })
  image?: string;

  @OneToMany(() => Ride, (ride) => ride.transportMode)
  rides: Ride[];
}
