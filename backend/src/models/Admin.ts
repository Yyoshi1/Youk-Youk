import { Schema, model, Document } from "mongoose";

export interface IAdmin extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  roles: string[]; // e.g., global admin, country admin
  country?: string; // optional if local admin
  modules: string[]; // modules admin can control
  language: string;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

const adminSchema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: { type: [String], default: [] },
    country: { type: String },
    modules: { type: [String], default: [] },
    language: { type: String, default: "en" },
    currency: { type: String, default: "USD" },
  },
  { timestamps: true }
);

export const Admin = model<IAdmin>("Admin", adminSchema);
