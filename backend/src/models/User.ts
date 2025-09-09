import { Schema, model, Document } from "mongoose";

// Account types
export enum AccountType {
  PASSENGER = "passenger",
  DRIVER = "driver",
  ADMIN = "admin",
}

// User interface
export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  accountType: AccountType;
  country: string; // ISO country code
  roles: string[]; // e.g., local admin, global admin
  modules: string[]; // enabled modules for this user
  language: string; // default language
  currency: string; // local currency
  profileCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// User schema
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountType: { type: String, enum: Object.values(AccountType), required: true },
    country: { type: String, required: true },
    roles: { type: [String], default: [] },
    modules: { type: [String], default: [] },
    language: { type: String, default: "en" },
    currency: { type: String, default: "USD" },
    profileCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
