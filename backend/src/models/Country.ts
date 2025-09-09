import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Import other models for relations
import User from "./User";
import Driver from "./Driver";
import Ride from "./Ride";
import Vehicle from "./Vehicle";
import Module from "./Module";

// ------------------------------
// Interface for Country attributes
// ------------------------------
interface CountryAttributes {
  id: number;                 // Unique ID for the country
  name: string;               // Country name
  code: string;               // ISO country code
  defaultLanguage: string;    // Default language for the country
  defaultCurrency: string;    // Default currency
  createdAt?: Date;           // Created timestamp
  updatedAt?: Date;           // Updated timestamp
}

// Fields optional during creation
interface CountryCreationAttributes extends Optional<CountryAttributes, "id"> {}

// ------------------------------
// Country model definition
// ------------------------------
class Country extends Model<CountryAttributes, CountryCreationAttributes> implements CountryAttributes {
  public id!: number;
  public name!: string;
  public code!: string;
  public defaultLanguage!: string;
  public defaultCurrency!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // ------------------------------
  // Relations with other models
  // ------------------------------
  public getUsers!: () => Promise<User[]>;
  public getDrivers!: () => Promise<Driver[]>;
  public getRides!: () => Promise<Ride[]>;
  public getVehicles!: () => Promise<Vehicle[]>;
  public getModules!: () => Promise<Module[]>;
}

// ------------------------------
// Initialize Country model
// ------------------------------
Country.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
    },
    defaultLanguage: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "en",
    },
    defaultCurrency: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "USD",
    },
  },
  {
    sequelize,
    tableName: "countries",
    modelName: "Country",
  }
);

// ===============================
// Define associations / relationships
// ===============================

// A country has many users
Country.hasMany(User, { foreignKey: "countryId", as: "users" });
User.belongsTo(Country, { foreignKey: "countryId", as: "country" });

// A country has many drivers
Country.hasMany(Driver, { foreignKey: "countryId", as: "drivers" });
Driver.belongsTo(Country, { foreignKey: "countryId", as: "country" });

// A country has many rides
Country.hasMany(Ride, { foreignKey: "countryId", as: "rides" });
Ride.belongsTo(Country, { foreignKey: "countryId", as: "country" });

// A country has many vehicles
Country.hasMany(Vehicle, { foreignKey: "countryId", as: "vehicles" });
Vehicle.belongsTo(Country, { foreignKey: "countryId", as: "country" });

// A country has many modules (features/plugins)
Country.hasMany(Module, { foreignKey: "countryId", as: "modules" });
Module.belongsTo(Country, { foreignKey: "countryId", as: "country" });

export default Country;
