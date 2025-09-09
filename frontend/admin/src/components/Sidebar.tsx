import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">Youkyouk Admin</h1>
      <nav className="flex-1 flex flex-col">
        <NavLink className="p-4 hover:bg-gray-700" to="/countries">Countries</NavLink>
        <NavLink className="p-4 hover:bg-gray-700" to="/users-trips">Users & Trips</NavLink>
        <NavLink className="p-4 hover:bg-gray-700" to="/modules">Modules</NavLink>
        <NavLink className="p-4 hover:bg-gray-700" to="/transport-modes">Transport Modes</NavLink>
        <NavLink className="p-4 hover:bg-gray-700" to="/analytics">Analytics</NavLink>
        <NavLink className="p-4 hover:bg-gray-700" to="/settings">Settings</NavLink>
      </nav>
    </div>
  );
};
