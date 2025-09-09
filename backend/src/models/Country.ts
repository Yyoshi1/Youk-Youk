import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Trip } from "./Trip";
import { Module } from "./Module";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  language: string;

  @OneToMany(() => User, user => user.country)
  users: User[];

  @OneToMany(() => Trip, trip => trip.country)
  trips: Trip[];

  @OneToMany(() => Module, module => module.country)
  modules: Module[];
}
