import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

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

  @ManyToOne(() => User, (user) => user.rides)
  user: User;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.rides)
  vehicle: Vehicle;

  @Column()
  fromLocation: string;

  @Column()
  toLocation: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column({
    type: "enum",
    enum: RideStatus,
    default: RideStatus.PENDING,
  })
  status: RideStatus;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  completedAt: Date;
}
