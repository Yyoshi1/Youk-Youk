import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Country } from "./Country";

@Entity()
export class ModuleSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moduleName: string;

  @Column()
  enabled: boolean;

  @ManyToOne(() => Country, (country) => country.moduleSettings)
  country: Country;
}
