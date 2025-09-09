import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

interface Trip {
  id: number;
  type: string;
  createdAt: string;
}

interface Props {
  countryId: number;
}

export const SmartAnalytics: React.FC<Props> = ({ countryId }) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [offers, setOffers] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/countries/${countryId}/trips`).then(res => {
      setTrips(res.data);
      axios.post(`http://localhost:4000/ai/smart-offers`, { trips: res.data }).then(r => setOffers(r.data));
    });
  }, [countryId]);

  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
      label: "Predicted Trips",
      data: trips.map(t => 1), // مثال مبسط، يمكن استخدام AI Prediction الحقيقية
      fill: false,
      borderColor: "rgb(75,192,192)"
    }]
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Smart Analytics for Country {countryId}</h3>
      <div className="mb-4">
        <Line data={data} />
      </div>
      <div>
        <h4 className="font-bold">Suggested Offers:</h4>
        <ul>
          {offers.map((offer, i) => <li key={i}>{offer}</li>)}
        </ul>
      </div>
    </div>
  );
};
