import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Country } from "./Country";

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "boolean", default: true })
  isActiveGlobally: boolean;

  @Column({ type: "boolean", default: false })
  isActiveForCountry: boolean;

  @ManyToOne(() => Country, (country) => country.modules, { nullable: true })
  country: Country | null;
}
