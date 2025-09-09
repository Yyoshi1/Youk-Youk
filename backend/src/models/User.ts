import { Schema, model, Document } from "mongoose";

export enum AccountType {
  PASSENGER = "passenger",
  DRIVER = "driver",
  ADMIN = "admin",
}

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  accountType: AccountType;
  country: string;
  roles: string[];
  modules: string[];
  language: string;
  currency: string;
  profileCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

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
