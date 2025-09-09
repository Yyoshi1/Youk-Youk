import create from "zustand";

interface Trip {
  id: number;
  type: string;
  status: string;
  origin: string;
  destination: string;
  price: number;
  passenger: string;
  driver: string;
  vehicle: string;
}

interface TripsState {
  trips: Trip[];
  setTrips: (trips: Trip[]) => void;
  updateTripStatus: (id: number, status: string) => void;
}

export const useTripsStore = create<TripsState>((set) => ({
  trips: [],
  setTrips: (trips) => set({ trips }),
  updateTripStatus: (id, status) =>
    set((state) => ({
      trips: state.trips.map((t) => (t.id === id ? { ...t, status } : t)),
    })),
}));
