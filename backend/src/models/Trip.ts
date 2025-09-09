import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ride } from "./Ride";

/**
 * Trip entity represents a specific instance of a ride.
 * - Can have startTime, endTime, additional notes
 */
@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ride)
  ride: Ride;

  @Column({ type: "timestamp", nullable: true })
  startTime: Date;

  @Column({ type: "timestamp", nullable: true })
  endTime: Date;

  @Column({ nullable: true })
  notes: string;
}
