import React from "react";

export const Topbar: React.FC = () => {
  const countries = ["Morocco", "France", "USA"];
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow">
      <div>
        <label htmlFor="country">Country: </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border p-1 rounded"
        >
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <span>Admin Role</span>
      </div>
    </div>
  );
};
