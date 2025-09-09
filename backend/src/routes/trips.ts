import { Router } from "express";
import { Trip } from "../models/Trip";
import { getRepository } from "typeorm";

const router = Router();
const tripRepo = getRepository(Trip);

// إنشاء رحلة جديدة
router.post("/", async (req, res) => {
  const trip = tripRepo.create(req.body);
  await tripRepo.save(trip);
  res.json(trip);
});

// جلب جميع الرحلات
router.get("/", async (req, res) => {
  const trips = await tripRepo.find({ relations: ["passenger","driver","vehicle"] });
  res.json(trips);
});

// تعديل حالة الرحلة
router.patch("/:id/status", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const trip = await tripRepo.findOne({ where: { id: parseInt(id) } });
  if (!trip) return res.status(404).json({ message: "Trip not found" });
  trip.status = status;
  await tripRepo.save(trip);
  res.json(trip);
});

export default router;
