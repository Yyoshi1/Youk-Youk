import { Router } from "express";
import { ModuleController } from "../controllers/ModuleController";

const router = Router();
const moduleController = new ModuleController();

router.post("/", (req, res) => moduleController.create(req, res));
router.get("/:id", (req, res) => moduleController.getById(req, res));
router.get("/", (req, res) => moduleController.getAll(req, res));
router.put("/:id", (req, res) => moduleController.update(req, res));
router.delete("/:id", (req, res) => moduleController.delete(req, res));

export default router;
