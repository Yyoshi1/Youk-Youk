import React, { useEffect, useState } from "react";
import axios from "axios";

interface Country {
  id: number;
  name: string;
  language: string;
  modules: string[];
}

export const CountriesPage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios.get("/api/countries").then(res => setCountries(res.data));
  }, []);

  return (
    <div>
      <h1>Countries & Modules</h1>
      {countries.map(country => (
        <div key={country.id}>
          <h2>{country.name} ({country.language})</h2>
          <ul>
            {country.modules.map(m => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
