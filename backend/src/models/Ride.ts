import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { Country } from "./Country";

export enum RideStatus {
  PENDING = "pending",
  ONGOING = "ongoing",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.ridesAsPassenger)
  passenger: User;

  @ManyToOne(() => User, (user) => user.ridesAsDriver)
  driver: User;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.rides)
  vehicle: Vehicle;

  @ManyToOne(() => Country, (country) => country.id)
  country: Country;

  @Column({ type: "varchar", length: 255 })
  fromLocation: string;

  @Column({ type: "varchar", length: 255 })
  toLocation: string;

  @Column({ type: "enum", enum: RideStatus, default: RideStatus.PENDING })
  status: RideStatus;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  completedAt: Date;
}
