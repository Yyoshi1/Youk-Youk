import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Vehicle } from "./Vehicle";

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Vehicle)
  @JoinTable()
  vehicles: Vehicle[];
}
