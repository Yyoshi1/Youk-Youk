import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ModuleSetting } from "./ModuleSetting";

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => ModuleSetting, (setting) => setting.module)
  settings: ModuleSetting[];
}
