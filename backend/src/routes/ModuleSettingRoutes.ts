import { Router } from "express";
import { ModuleSettingController } from "../controllers/ModuleSettingController";

const router = Router();
const moduleSettingController = new ModuleSettingController();

router.post("/", (req, res) => moduleSettingController.create(req, res));
router.get("/:id", (req, res) => moduleSettingController.getById(req, res));
router.get("/", (req, res) => moduleSettingController.getAll(req, res));
router.put("/:id", (req, res) => moduleSettingController.update(req, res));
router.delete("/:id", (req, res) => moduleSettingController.delete(req, res));

export default router;
