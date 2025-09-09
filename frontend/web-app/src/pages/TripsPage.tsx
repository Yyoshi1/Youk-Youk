import React, { useEffect, useState } from "react";
import { getTrips } from "../../services/api";
import Navbar from "../components/Navbar";
import RideCard from "../components/RideCard";

const TripsPage: React.FC = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await getTrips();
        setTrips(response.data);
      } catch (error) {
        console.error("Failed to fetch trips:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrips();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">سجل رحلاتك</h1>
        {loading ? (
          <p>جاري التحميل...</p>
        ) : trips.length === 0 ? (
          <p>لا توجد رحلات سابقة.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trips.map((trip) => (
              <RideCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default TripsPage;
