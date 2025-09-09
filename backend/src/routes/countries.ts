import { Router } from "express";
import { getRepository } from "typeorm";
import { Country } from "../models/Country";
import { ModuleSetting } from "../models/ModuleSetting";

const router = Router();
const countryRepo = getRepository(Country);
const moduleRepo = getRepository(ModuleSetting);

// إنشاء دولة جديدة
router.post("/", async (req, res) => {
  const country = countryRepo.create(req.body);
  await countryRepo.save(country);
  res.json(country);
});

// تفعيل/تعطيل Module لدولة معينة
router.patch("/:countryId/modules/:moduleName", async (req, res) => {
  const { countryId, moduleName } = req.params;
  const { enabled } = req.body;
  let module = await moduleRepo.findOne({ where: { country: { id: parseInt(countryId) }, moduleName } });
  if (!module) {
    const country = await countryRepo.findOne({ where: { id: parseInt(countryId) } });
    module = moduleRepo.create({ country, moduleName, enabled });
  } else {
    module.enabled = enabled;
  }
  await moduleRepo.save(module);
  res.json(module);
});

// جلب Modules لدولة معينة
router.get("/:countryId/modules", async (req, res) => {
  const { countryId } = req.params;
  const modules = await moduleRepo.find({ where: { country: { id: parseInt(countryId) } } });
  res.json(modules);
});

export default router;
