import { Router } from "express";
import { DriverController } from "../controllers/DriverController";

const router = Router();
const driverController = new DriverController();

router.post("/", (req, res) => driverController.create(req, res));
router.get("/:id", (req, res) => driverController.getById(req, res));
router.get("/", (req, res) => driverController.getAll(req, res));
router.put("/:id", (req, res) => driverController.update(req, res));
router.delete("/:id", (req, res) => driverController.delete(req, res));

export default router;
