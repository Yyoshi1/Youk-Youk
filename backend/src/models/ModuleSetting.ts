import { Schema, model, Document } from "mongoose";

export interface IModuleSetting extends Document {
  moduleId: string;
  country?: string; // optional for country-specific setting
  settings: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const moduleSettingSchema = new Schema<IModuleSetting>(
  {
    moduleId: { type: Schema.Types.ObjectId, ref: "Module", required: true },
    country: { type: String },
    settings: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export const ModuleSetting = model<IModuleSetting>("ModuleSetting", moduleSettingSchema);
