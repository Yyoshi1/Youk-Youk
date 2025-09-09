import { Router } from "express";
import { TripController } from "../controllers/TripController";

const router = Router();
const tripController = new TripController();

router.post("/", (req, res) => tripController.create(req, res));
router.get("/:id", (req, res) => tripController.getById(req, res));
router.get("/", (req, res) => tripController.getAll(req, res));
router.put("/:id", (req, res) => tripController.update(req, res));
router.delete("/:id", (req, res) => tripController.delete(req, res));

export default router;
