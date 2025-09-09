import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vehicle } from "./Vehicle";
import { User } from "./User";
import { Ride } from "./Ride";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string; // : Morocco, France, USA

  @Column({ type: "varchar", length: 10, default: "MAD" })
  currency: string; // 

  @Column({ type: "varchar", length: 10, default: "fr" })
  defaultLanguage: string; // 

  @OneToMany(() => Vehicle, (vehicle) => vehicle.country)
  vehicles: Vehicle[];

  @OneToMany(() => User, (user) => user.country)
  users: User[];

  @OneToMany(() => Ride, (ride) => ride.country)
  rides: Ride[];
}
