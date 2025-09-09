import { Schema, model, Document } from "mongoose";

export interface IModule extends Document {
  name: string;
  key: string;
  description: string;
  enabledGlobally: boolean;
  enabledCountries: string[]; // country ISO codes
  createdAt: Date;
  updatedAt: Date;
}

const moduleSchema = new Schema<IModule>(
  {
    name: { type: String, required: true },
    key: { type: String, required: true, unique: true },
    description: { type: String },
    enabledGlobally: { type: Boolean, default: true },
    enabledCountries: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Module = model<IModule>("Module", moduleSchema);
