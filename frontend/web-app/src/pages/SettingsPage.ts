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
            <label className="block mb-1 font-medium">اللغة:</label>
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
            <label className="block mb-1 font-medium">العملة:</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="MAD">درهم مغربي (MAD)</option>
              <option value="EUR">يورو (EUR)</option>
              <option value="USD">دولار أمريكي (USD)</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            حفظ الإعدادات
          </button>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
