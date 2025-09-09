import React, { useEffect, useState } from "react";
import axios from "axios";

export const TransportModesPage: React.FC = () => {
  const [modes, setModes] = useState([]);
  const [newMode, setNewMode] = useState("");

  useEffect(() => {
    axios.get("/api/transport-modes").then(res => setModes(res.data));
  }, []);

  const addMode = () => {
    if (!newMode.trim()) return;
    axios.post("/api/transport-modes", { name: newMode }).then(res => {
      setModes(prev => [...prev, res.data]);
      setNewMode("");
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Transport Modes</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newMode}
          onChange={(e) => setNewMode(e.target.value)}
          placeholder="New Mode"
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={addMode}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {modes.map((m: any) => (
          <li key={m.id} className="flex justify-between items-center p-2 border-b">
            <span>{m.name}</span>
            <span>{m.active ? "Active" : "Inactive"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
