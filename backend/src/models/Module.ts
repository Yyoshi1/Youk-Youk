import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Country } from "./Country";

/**
 * Module entity represents an optional feature in the YoKyok system.
 * - Can be enabled or disabled per country
 * Examples: VIP, Shared rides, Dynamic Pricing, AI Assistant, etc.
 */
@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Country, (country) => country.modules)
  country: Country;
}
