import { Schema, model, Document } from "mongoose";

export interface ICountry extends Document {
  name: string;
  isoCode: string;
  defaultLanguage: string;
  defaultCurrency: string;
  enabledModules: string[]; // modules activated for this country
  createdAt: Date;
  updatedAt: Date;
}

const countrySchema = new Schema<ICountry>(
  {
    name: { type: String, required: true },
    isoCode: { type: String, required: true, unique: true },
    defaultLanguage: { type: String, default: "en" },
    defaultCurrency: { type: String, default: "USD" },
    enabledModules: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Country = model<ICountry>("Country", countrySchema);
