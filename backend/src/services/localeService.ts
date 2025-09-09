import { Country } from "../models/Country";

export function getDefaultLanguage(country: Country) {
  return country.defaultLanguage || "en";
}

export function getCurrency(country: Country) {
  return country.currency || "USD";
}
