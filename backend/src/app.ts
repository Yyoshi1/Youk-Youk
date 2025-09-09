import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import countryRoutes from "./routes/countries";
import tripRoutes from "./routes/trips";
import aiRoutes from "./routes/ai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/countries", countryRoutes);
app.use("/trips", tripRoutes);
app.use("/ai", aiRoutes);

app.listen(4000, () => console.log("Backend running on port 4000"));
