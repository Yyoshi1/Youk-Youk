import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ride } from "./Ride";
import { Module } from "./Module";

export enum UserRole {
  PASSENGER = "passenger",
  DRIVER = "driver",
  ADMIN = "admin",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.PASSENGER,
  })
  role: UserRole;

  @OneToMany(() => Ride, (ride) => ride.user)
  rides: Ride[];

  @OneToMany(() => Module, (module) => module.user)
  modules: Module[];
}
