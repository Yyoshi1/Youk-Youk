import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Trip } from "./Trip";
import { ModuleSetting } from "./ModuleSetting";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  defaultLanguage: string;

  @Column()
  currency: string;

  @OneToMany(() => User, (user) => user.country)
  users: User[];

  @OneToMany(() => Trip, (trip) => trip.country)
  trips: Trip[];

  @OneToMany(() => ModuleSetting, (module) => module.country)
  moduleSettings: ModuleSetting[];
}
