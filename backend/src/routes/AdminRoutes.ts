import { Router } from "express";
import { AdminController } from "../controllers/AdminController";

const router = Router();
const adminController = new AdminController();

router.post("/", (req, res) => adminController.create(req, res));
router.get("/:id", (req, res) => adminController.getById(req, res));
router.get("/", (req, res) => adminController.getAll(req, res));
router.put("/:id", (req, res) => adminController.update(req, res));
router.delete("/:id", (req, res) => adminController.delete(req, res));

export default router;
