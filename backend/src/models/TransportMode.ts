import { Schema, model, Document } from "mongoose";

export interface ITransportMode extends Document {
  name: string; // car, bike, truck, etc
  imageUrl: string;
  capacity: number;
  baseFare: number;
  perKmFare: number;
  modulesApplicable: string[];
  createdAt: Date;
  updatedAt: Date;
}

const transportModeSchema = new Schema<ITransportMode>(
  {
    name: { type: String, required: true },
    imageUrl: { type: String },
    capacity: { type: Number, default: 1 },
    baseFare: { type: Number, default: 0 },
    perKmFare: { type: Number, default: 0 },
    modulesApplicable: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const TransportMode = model<ITransportMode>("TransportMode", transportModeSchema);
