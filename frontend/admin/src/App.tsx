import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryModules } from "./components/CountryModules";
import { SmartAnalytics } from "./components/SmartAnalytics";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/country/:id/modules" element={<CountryModules countryId={1} />} />
      <Route path="/country/:id/analytics" element={<SmartAnalytics countryId={1} />} />
    </Routes>
  </Router>
);

export default App;
