import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Ride } from "./Ride";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  type: string; // car, small_truck, big_truck, e-bike

  @Column({ type: "varchar", length: 255, nullable: true })
  imageUrl: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "ownerId" })
  owner: User;

  @OneToMany(() => Ride, (ride) => ride.vehicle)
  rides: Ride[];

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "decimal", precision: 5, scale: 2, default: 1.0 })
  multiplier: number; // multiplier for dynamic pricing
}
