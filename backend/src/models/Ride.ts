import { Schema, model, Document } from "mongoose";

export interface IRide extends Document {
  tripId: string;
  userId: string;
  driverId: string;
  transportMode: string;
  status: string; // e.g., pending, active, completed, cancelled
  price: number;
  dynamicPrice: number;
  modulesApplied: string[];
  fromLocation: string;
  toLocation: string;
  createdAt: Date;
  updatedAt: Date;
}

const rideSchema = new Schema<IRide>(
  {
    tripId: { type: Schema.Types.ObjectId, ref: "Trip", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
    transportMode: { type: String, required: true },
    status: { type: String, default: "pending" },
    price: { type: Number, default: 0 },
    dynamicPrice: { type: Number, default: 0 },
    modulesApplied: { type: [String], default: [] },
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
  },
  { timestamps: true }
);

export const Ride = model<IRide>("Ride", rideSchema);
