import React, { useEffect } from "react";
import { TripsTable } from "../components/TripsTable";
import { useTripsStore } from "../store/tripsStore";
import axios from "axios";

export const Dashboard: React.FC = () => {
  const { setTrips } = useTripsStore();

  useEffect(() => {
    axios.get("http://localhost:4000/trips").then((res) => {
      setTrips(res.data.map((t: any) => ({
        ...t,
        passenger: t.passenger.name,
        driver: t.driver?.name || "Unassigned",
        vehicle: t.vehicle?.plateNumber || "N/A"
      })));
    });
  }, [setTrips]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trips Dashboard</h1>
      <TripsTable />
    </div>
  );
};
