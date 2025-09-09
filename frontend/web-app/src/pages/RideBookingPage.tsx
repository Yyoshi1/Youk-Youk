import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { bookRide } from "../../services/api";

const RideBookingPage: React.FC = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    setLoading(true);
    try {
      await bookRide({ pickup, destination, vehicleType });
      setMessage("تم حجز الرحلة بنجاح!");
      setPickup("");
      setDestination("");
    } catch (err) {
      console.error(err);
      setMessage("فشل حجز الرحلة، حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">حجز رحلة جديدة</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="نقطة الانطلاق"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="الوجهة"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="car">سيارة</option>
            <option value="small_truck">شاحنة صغيرة</option>
            <option value="large_truck">شاحنة كبيرة</option>
            <option value="e_bike">دراجة كهربائية</option>
          </select>
          <button
            onClick={handleBooking}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {loading ? "جاري الحجز..." : "حجز الرحلة"}
          </button>
          {message && <p>{message}</p>}
        </div>
      </main>
    </div>
  );
};

export default RideBookingPage;
