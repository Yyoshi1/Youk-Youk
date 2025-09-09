import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from "./Trip";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  role: "passenger" | "driver" | "admin";

  @OneToMany(() => Trip, (trip) => trip.passenger)
  trips: Trip[];
}
