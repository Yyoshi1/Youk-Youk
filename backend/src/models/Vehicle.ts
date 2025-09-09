import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Driver } from "./Driver";
import { Ride } from "./Ride";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column({ nullable: true })
  plateNumber?: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  capacity: number;

  @ManyToOne(() => Driver, (driver) => driver.id)
  owner: Driver;

  @OneToMany(() => Ride, (ride) => ride.transportMode)
  rides: Ride[];
}
