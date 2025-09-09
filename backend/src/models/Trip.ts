import { Schema, model, Document } from "mongoose";

export interface ITrip extends Document {
  userId: string;
  driverId?: string;
  transportMode: string;
  fromLocation: string;
  toLocation: string;
  status: string; // pending, active, completed
  price: number;
  dynamicPrice: number;
  modulesApplied: string[];
  scheduledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const tripSchema = new Schema<ITrip>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: Schema.Types.ObjectId, ref: "Driver" },
    transportMode: { type: String, required: true },
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
    status: { type: String, default: "pending" },
    price: { type: Number, default: 0 },
    dynamicPrice: { type: Number, default: 0 },
    modulesApplied: { type: [String], default: [] },
    scheduledAt: { type: Date },
  },
  { timestamps: true }
);

export const Trip = model<ITrip>("Trip", tripSchema);
