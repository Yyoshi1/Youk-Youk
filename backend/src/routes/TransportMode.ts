import { Router } from "express";
import { TransportMode } from "../models/TransportMode";
import { AppDataSource } from "../data-source";

const router = Router();

router.post("/transport-modes", async (req, res) => {
  const { name } = req.body;
  const mode = new TransportMode();
  mode.name = name;
  await AppDataSource.manager.save(mode);
  res.json(mode);
});

router.get("/transport-modes", async (req, res) => {
  const modes = await AppDataSource.manager.find(TransportMode);
  res.json(modes);
});

export default router;
