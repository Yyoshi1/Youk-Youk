import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Country } from "./Country";

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => Country, country => country.modules)
  country: Country;
}
