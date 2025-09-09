import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Driver } from "./Driver";
import { TransportMode } from "./TransportMode";

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.rides)
  user: User;

  @ManyToOne(() => Driver, (driver) => driver.rides)
  driver: Driver;

  @ManyToOne(() => TransportMode, (mode) => mode.rides)
  transportMode: TransportMode;

  @Column()
  pickupLocation: string;

  @Column()
  dropoffLocation: string;

  @Column({ type: "float" })
  price: number;

  @Column({ default: "pending" }) // pending, completed, canceled
  status: string;
}
