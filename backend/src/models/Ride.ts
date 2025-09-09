import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { Country } from "./Country";

export type RideStatus = "pending" | "accepted" | "in_progress" | "completed" | "cancelled";

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  passenger: User;

  @ManyToOne(() => User, { eager: true })
  driver: User;

  @ManyToOne(() => Vehicle, { eager: true })
  vehicle: Vehicle;

  @Column({ type: "varchar", length: 100 })
  fromLocation: string;

  @Column({ type: "varchar", length: 100 })
  toLocation: string;

  @Column({ type: "float", default: 0 })
  price: number;

  @Column({ type: "enum", enum: ["pending", "accepted", "in_progress", "completed", "cancelled"], default: "pending" })
  status: RideStatus;

  @ManyToOne(() => Country)
  country: Country;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  updatedAt: Date;
}
