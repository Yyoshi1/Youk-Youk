import React, { useEffect, useState } from "react";
import axios from "axios";

interface Module {
  id: number;
  moduleName: string;
  enabled: boolean;
}

interface Props {
  countryId: number;
}

export const CountryModules: React.FC<Props> = ({ countryId }) => {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/countries/${countryId}/modules`).then(res => setModules(res.data));
  }, [countryId]);

  const toggleModule = (moduleName: string, enabled: boolean) => {
    axios.patch(`http://localhost:4000/countries/${countryId}/modules/${moduleName}`, { enabled })
      .then(res => setModules(modules.map(m => m.moduleName === moduleName ? res.data : m)));
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Modules for Country {countryId}</h3>
      {modules.map((mod) => (
        <div key={mod.id} className="flex items-center mb-2">
          <span className="flex-1">{mod.moduleName}</span>
          <input type="checkbox" checked={mod.enabled} onChange={(e) => toggleModule(mod.moduleName, e.target.checked)} />
        </div>
      ))}
    </div>
  );
};
