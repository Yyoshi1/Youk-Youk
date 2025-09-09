import { Country } from "./Country";

// إضافة العلاقة
@ManyToOne(() => Country, (country) => country.users)
country: Country;
