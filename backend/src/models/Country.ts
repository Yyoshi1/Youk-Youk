import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Driver } from "./Driver";
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

  @OneToMany(() => User, (user) => user.countryId)
  users: User[];

  @OneToMany(() => Driver, (driver) => driver.countryId)
  drivers: Driver[];

  @OneToMany(() => ModuleSetting, (setting) => setting.country)
  moduleSettings: ModuleSetting[];
}
