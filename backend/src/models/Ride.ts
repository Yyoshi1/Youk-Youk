import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Module } from "./Module";
import { Vehicle } from "./Vehicle";

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "passengerId" })
  passenger: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: "driverId" })
  driver: User;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ name: "vehicleId" })
  vehicle: Vehicle;

  @ManyToOne(() => Module)
  @JoinColumn({ name: "moduleId" })
  module: Module;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  basePrice: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  finalPrice: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  fromLocation: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  toLocation: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  completedAt: Date;

  @Column({ default: false })
  isCompleted: boolean;
}
