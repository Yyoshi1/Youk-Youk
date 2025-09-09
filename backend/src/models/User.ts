import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Country } from "./Country";
import { Ride } from "./Ride";

/**
 * User entity represents a customer in the YoKyok system.
 * - Can have multiple rides
 * - Can switch roles if multiple account types exist
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Country, (country) => country.users)
  country: Country;

  @OneToMany(() => Ride, (ride) => ride.user)
  rides: Ride[];
}
