import React, { useEffect, useState } from "react";
import axios from "axios";

export const UsersTripsPage: React.FC<{ countryId: number }> = ({ countryId }) => {
  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get(`/api/users?country=${countryId}`).then(res => setUsers(res.data));
    axios.get(`/api/trips?country=${countryId}`).then(res => setTrips(res.data));
  }, [countryId]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} ({u.email})</li>)}
      </ul>

      <h1>Trips</h1>
      <ul>
        {trips.map(t => <li key={t.id}>{t.type} - {t.origin} → {t.destination}</li>)}
      </ul>
    </div>
  );
};
