import React from "react";
import { useTripsStore } from "../store/tripsStore";

export const TripsTable: React.FC = () => {
  const { trips, updateTripStatus } = useTripsStore();

  const handleStatusChange = (id: number, e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTripStatus(id, e.target.value);
  };

  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Status</th>
          <th className="p-2 border">Origin</th>
          <th className="p-2 border">Destination</th>
          <th className="p-2 border">Price</th>
          <th className="p-2 border">Passenger</th>
          <th className="p-2 border">Driver</th>
          <th className="p-2 border">Vehicle</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip) => (
          <tr key={trip.id}>
            <td className="p-2 border">{trip.id}</td>
            <td className="p-2 border">{trip.type}</td>
            <td className="p-2 border">
              <select value={trip.status} onChange={(e) => handleStatusChange(trip.id, e)}>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="p-2 border">{trip.origin}</td>
            <td className="p-2 border">{trip.destination}</td>
            <td className="p-2 border">{trip.price}</td>
            <td className="p-2 border">{trip.passenger}</td>
            <td className="p-2 border">{trip.driver}</td>
            <td className="p-2 border">{trip.vehicle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
