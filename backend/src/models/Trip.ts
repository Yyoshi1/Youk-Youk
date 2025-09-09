import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Driver } from "./Driver";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.trips)
  user: User;

  @ManyToOne(() => Driver, (driver) => driver.trips)
  driver: Driver;

  @Column()
  startLocation: string;

  @Column()
  endLocation: string;

  @Column({ type: "float" })
  estimatedPrice: number;

  @Column({ default: "scheduled" }) // scheduled, in_progress, completed, canceled
  status: string;
}
