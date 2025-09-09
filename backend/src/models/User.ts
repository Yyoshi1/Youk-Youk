import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ride } from "./Ride";
import { Trip } from "./Trip";

// User entity represents a passenger, driver, or admin depending on role
@Entity()
export class User {
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

  @Column({ default: "passenger" }) // passenger, driver, admin
  role: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  countryId?: number;

  @OneToMany(() => Ride, (ride) => ride.user)
  rides: Ride[];

  @OneToMany(() => Trip, (trip) => trip.user)
  trips: Trip[];
}
