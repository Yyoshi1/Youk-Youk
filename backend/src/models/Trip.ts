import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

export type TripStatus = "pending" | "in_progress" | "completed" | "cancelled";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  passenger: User;

  @ManyToOne(() => User, { nullable: true })
  driver: User | null;

  @Column()
  fromLocation: string;

  @Column()
  toLocation: string;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "enum", enum: ["pending", "in_progress", "completed", "cancelled"], default: "pending" })
  status: TripStatus;

  @Column({ nullable: true })
  vehicleType: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
