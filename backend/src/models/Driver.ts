import { Schema, model, Document } from "mongoose";
import { AccountType } from "./User";

export interface IDriver extends Document {
  userId: string;
  vehicles: string[]; // vehicle IDs
  trips: string[]; // trip IDs
  ratings: number;
  earnings: number;
  active: boolean;
  modules: string[];
  language: string;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

const driverSchema = new Schema<IDriver>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vehicles: { type: [String], default: [] },
    trips: { type: [String], default: [] },
    ratings: { type: Number, default: 0 },
    earnings: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    modules: { type: [String], default: [] },
    language: { type: String, default: "en" },
    currency: { type: String, default: "USD" },
  },
  { timestamps: true }
);

export const Driver = model<IDriver>("Driver", driverSchema);
