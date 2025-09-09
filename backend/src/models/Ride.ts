import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Driver } from "./Driver";
import { User } from "./User";
import { Country } from "./Country";
import { TransportMode } from "./TransportMode";

/**
 * Ride entity represents a ride requested by a user.
 * - type: VIP, shared, economic, delivery, etc.
 * - price: calculated dynamically based on distance, transport, and modules
 */
@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.rides)
  user: User;

  @ManyToOne(() => Driver, (driver) => driver.rides)
  driver: Driver;

  @ManyToOne(() => Country, (country) => country.rides)
  country: Country;

  @ManyToOne(() => TransportMode)
  transportMode: TransportMode;

  @Column()
  type: string; // VIP, Shared, Economic, Delivery

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column({ default: "pending" })
  status: string; // pending, in-progress, completed, cancelled
}
