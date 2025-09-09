import React, { useEffect, useState } from "react";
import axios from "axios";

interface Module {
  id: number;
  name: string;
  active: boolean;
}

export const ModulesPage: React.FC<{ countryId: number }> = ({ countryId }) => {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    axios.get(`/api/modules?country=${countryId}`).then(res => setModules(res.data));
  }, [countryId]);

  const toggleModule = (moduleId: number) => {
    axios.patch(`/api/modules/${moduleId}/toggle`).then(() => {
      setModules(prev => prev.map(m => m.id === moduleId ? {...m, active: !m.active} : m));
    });
  };

  return (
    <div>
      <h1>Modules</h1>
      <ul>
        {modules.map(m => (
          <li key={m.id} className="flex justify-between items-center p-2 border-b">
            <span>{m.name}</span>
            <button
              onClick={() => toggleModule(m.id)}
              className={`px-2 py-1 rounded ${m.active ? 'bg-green-500' : 'bg-red-500'}`}
            >
              {m.active ? "Active" : "Inactive"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
