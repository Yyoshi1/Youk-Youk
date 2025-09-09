import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { Country } from "./Country";

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.rides)
  passenger: User;

  @ManyToOne(() => User, (user) => user.rides)
  driver: User;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.rides)
  vehicle: Vehicle;

  @ManyToOne(() => Country, (country) => country.rides)
  country: Country;

  @Column({ type: "varchar", length: 200 })
  fromLocation: string;

  @Column({ type: "varchar", length: 200 })
  toLocation: string;

  @Column({ type: "float", default: 0 })
  price: number;

  @Column({ type: "varchar", length: 50, default: "pending" })
  status: string; // pending, ongoing, completed, cancelled

  @CreateDateColumn()
  createdAt: Date;
}
