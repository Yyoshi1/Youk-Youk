import { Country } from "./Country";

// إضافة العلاقة
@ManyToOne(() => Country, (country) => country.trips)
country: Country;
