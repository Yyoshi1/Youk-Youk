import { Schema, model, Document } from "mongoose";

export interface IVehicle extends Document {
  driverId: string;
  type: string; // car, bike, truck, etc.
  model: string;
  licensePlate: string;
  imageUrl: string;
  capacity: number;
  baseFare: number;
  perKmFare: number;
  dynamicPricingEnabled: boolean;
  modulesApplicable: string[];
  createdAt: Date;
  updatedAt: Date;
}

const vehicleSchema = new Schema<IVehicle>(
  {
    driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
    type: { type: String, required: true },
    model: { type: String, required: true },
    licensePlate: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    capacity: { type: Number, default: 1 },
    baseFare: { type: Number, default: 0 },
    perKmFare: { type: Number, default: 0 },
    dynamicPricingEnabled: { type: Boolean, default: true },
    modulesApplicable: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Vehicle = model<IVehicle>("Vehicle", vehicleSchema);
