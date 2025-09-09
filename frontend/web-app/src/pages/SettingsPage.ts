import React, { useState } from "react";
import Navbar from "../components/Navbar";

const SettingsPage: React.FC = () => {
  const [language, setLanguage] = useState("ar");
  const [currency, setCurrency] = useState("MAD");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">الإعدادات</h1>
        <div className="space-y-4">
          <div>
            <label>اللغة:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="ar">العربية</option>
              <option value="fr">الفرنسية</option>
              <option value="en">الإنجليزية</option>
            </select>
          </div>
          <div>
            <label>العملة:</label>
            <select
              value={currency}
              onChange={(
