import React from "react";
import { FaCar, FaTruck, FaMotorcycle, FaStar } from "react-icons/fa";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TripsApp</h1>
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>

      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Your Smart Ride Solution</h2>
        <p className="text-gray-700 mb-8">
          Book VIP, Shared, Eco, or Delivery trips easily with our intelligent platform.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded">Book a Trip</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded">Download App</button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <h3 className="text-2xl font-bold text-center mb-8">Types of Trips</h3>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <FaCar size={48} className="text-blue-600" />
            <span>VIP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaStar size={48} className="text-green-600" />
            <span>Shared</span>
          </div>
          <div className="flex flex-col items-center">
            <FaMotorcycle size={48} className="text-yellow-600" />
            <span>Eco</span>
          </div>
          <div className="flex flex-col items-center">
            <FaTruck size={48} className="text-red-600" />
            <span>Delivery</span>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 TripsApp. All rights reserved.
      </footer>
    </div>
  );
};
