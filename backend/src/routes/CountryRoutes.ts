import { Router } from "express";
import { CountryController } from "../controllers/CountryController";

const router = Router();
const countryController = new CountryController();

router.post("/", (req, res) => countryController.create(req, res));
router.get("/:id", (req, res) => countryController.getById(req, res));
router.get("/", (req, res) => countryController.getAll(req, res));
router.put("/:id", (req, res) => countryController.update(req, res));
router.delete("/:id", (req, res) => countryController.delete(req, res));

export default router;
