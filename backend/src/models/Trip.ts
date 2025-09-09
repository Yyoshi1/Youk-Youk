import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Driver } from "./Driver";
import { Vehicle } from "./Vehicle";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: "VIP" | "Shared" | "Eco" | "Delivery";

  @Column()
  status: "pending" | "accepted" | "in_progress" | "completed" | "cancelled";

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column("float")
  price: number;

  @Column({ nullable: true })
  scheduledAt: Date;

  @ManyToOne(() => User, (user) => user.trips)
  passenger: User;

  @ManyToOne(() => Driver, (driver) => driver.trips)
  driver: Driver;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  vehicle: Vehicle;
}
