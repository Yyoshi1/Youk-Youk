import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Import all routes
import AdminRoutes from "./routes/AdminRoutes";
import CountryRoutes from "./routes/CountryRoutes";
import DriverRoutes from "./routes/DriverRoutes";
import ModuleRoutes from "./routes/ModuleRoutes";
import ModuleSettingRoutes from "./routes/ModuleSettingRoutes";
import RideRoutes from "./routes/RideRoutes";
import TransportModeRoutes from "./routes/TransportModeRoutes";
import TripRoutes from "./routes/TripRoutes";
import UserRoutes from "./routes/UserRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount all routes
app.use("/api/admins", AdminRoutes);
app.use("/api/countries", CountryRoutes);
app.use("/api/drivers", DriverRoutes);
app.use("/api/modules", ModuleRoutes);
app.use("/api/module-settings", ModuleSettingRoutes);
app.use("/api/rides", RideRoutes);
app.use("/api/transport-modes", TransportModeRoutes);
app.use("/api/trips", TripRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/vehicles", VehicleRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
