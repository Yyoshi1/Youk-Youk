import { Router } from "express";
import { RideController } from "../controllers/RideController";

const router = Router();
const rideController = new RideController();

router.post("/", (req, res) => rideController.create(req, res));
router.get("/:id", (req, res) => rideController.getById(req, res));
router.get("/", (req, res) => rideController.getAll(req, res));
router.put("/:id", (req, res) => rideController.update(req, res));
router.delete("/:id", (req, res) => rideController.delete(req, res));

export default router;
