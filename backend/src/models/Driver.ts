import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Country } from "./Country";
import { Ride } from "./Ride";
import { TransportMode } from "./TransportMode";

/**
 * Driver entity represents a driver in the YoKyok system.
 * - Can manage multiple vehicles
 * - Can accept rides (VIP, shared, economic, delivery)
 * - Dynamic pricing applies to their rides
 */
@Entity()
export class Driver {
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

  @ManyToOne(() => Country, (country) => country.drivers)
  country: Country;

  @OneToMany(() => Ride, (ride) => ride.driver)
  rides: Ride[];

  @OneToMany(() => TransportMode, (transport) => transport.driver)
  vehicles: TransportMode[];
}
