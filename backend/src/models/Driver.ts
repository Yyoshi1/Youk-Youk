import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ride } from "./Ride";
import { Trip } from "./Trip";

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  countryId?: number;

  @OneToMany(() => Ride, (ride) => ride.driver)
  rides: Ride[];

  @OneToMany(() => Trip, (trip) => trip.driver)
  trips: Trip[];
}
