import { Router } from "express";
import { TransportModeController } from "../controllers/TransportModeController";

const router = Router();
const transportModeController = new TransportModeController();

router.post("/", (req, res) => transportModeController.create(req, res));
router.get("/:id", (req, res) => transportModeController.getById(req, res));
router.get("/", (req, res) => transportModeController.getAll(req, res));
router.put("/:id", (req, res) => transportModeController.update(req, res));
router.delete("/:id", (req, res) => transportModeController.delete(req, res));

export default router;
