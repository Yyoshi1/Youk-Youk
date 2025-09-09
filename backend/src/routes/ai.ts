import { Router } from "express";
import { predictMonthlyDemand, suggestSmartOffers } from "../services/aiDemandService";

const router = Router();

router.post("/smart-offers", (req, res) => {
  const trips = req.body.trips;
  const offers = suggestSmartOffers(trips);
  res.json(offers);
});

router.post("/predict-demand", (req, res) => {
  const trips = req.body.trips;
  const prediction = predictMonthlyDemand(trips);
  res.json(prediction);
});

export default router;
