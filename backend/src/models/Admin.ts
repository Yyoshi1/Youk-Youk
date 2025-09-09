import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Admin entity represents an administrator in the YoKyok system.
 * Admins can be global or country-specific.
 */
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isSuperAdmin: boolean; // true = global admin, false = country admin
}
