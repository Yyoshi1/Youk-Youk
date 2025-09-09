import { Module } from "../models/Module";
import { ModuleSetting } from "../models/ModuleSetting";
import { Country } from "../models/Country";

/**
 * ModuleService
 * إدارة كل الـ Modules لكل دولة وعالميًا
 */
export class ModuleService {
  /**
   * تفعيل Module لدولة محددة
   */
  static async enableModule(countryId: string, moduleName: string) {
    const country = await Country.findById(countryId);
    if (!country) throw new Error("Country not found");

    let moduleSetting = await ModuleSetting.findOne({ country: countryId, moduleName });
    if (!moduleSetting) {
      moduleSetting = new ModuleSetting({ country: countryId, moduleName, enabled: true });
    } else {
      moduleSetting.enabled = true;
    }
    await moduleSetting.save();
    return moduleSetting;
  }

  /**
   * تعطيل Module لدولة محددة
   */
  static async disableModule(countryId: string, moduleName: string) {
    const moduleSetting = await ModuleSetting.findOne({ country: countryId, moduleName });
    if (!moduleSetting) throw new Error("Module setting not found");

    moduleSetting.enabled = false;
    await moduleSetting.save();
    return moduleSetting;
  }

  /**
   * جلب كل الـ Modules الفعالة لدولة معينة
   */
  static async getActiveModules(countryId: string) {
    return await ModuleSetting.find({ country: countryId, enabled: true });
  }

  /**
   * جلب إعدادات Module محدد
   */
  static async getModuleSettings(countryId: string, moduleName: string) {
    return await ModuleSetting.findOne({ country: countryId, moduleName });
  }
}
