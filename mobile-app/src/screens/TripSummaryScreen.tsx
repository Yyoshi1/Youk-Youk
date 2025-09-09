import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";

// 
type Vehicle = {
  id: string;
  name: string;
  image: any; // Image require
  basePrice: number;
};

// 
const services = ["Ride", "Comfort", "Bike", "Taxi", "Travel", "Shipping", "VIP", "Shared"];

// 
const mockVehicles: Vehicle[] = [
  { id: "1", name: "Ride", image: require("../assets/vehicles/ride.png"), basePrice: 5 },
  { id: "2", name: "Comfort", image: require("../assets/vehicles/comfort.png"), basePrice: 8 },
  { id: "3", name: "Bike", image: require("../assets/vehicles/bike.png"), basePrice: 3 },
  { id: "4", name: "Taxi", image: require("../assets/vehicles/taxi.png"), basePrice: 6 },
  { id: "5", name: "Travel", image: require("../assets/vehicles/travel.png"), basePrice: 10 },
  { id: "6", name: "Shipping", image: require("../assets/vehicles/shipping.png"), basePrice: 12 },
];

const TripSummaryScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("Ride");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(mockVehicles[0]);
  const [currentPrice, setCurrentPrice] = useState<number>(mockVehicles[0].basePrice);

  // عند تغيير المركبة
  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentPrice(vehicle.basePrice);
  };

  // تعديل السعر يدويًا
  const incrementPrice = () => setCurrentPrice(currentPrice + 1);
  const decrementPrice = () => currentPrice > 0 && setCurrentPrice(currentPrice - 1);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Trip Summary - {selectedService}</Text>

      {/* Selected Vehicle */}
      <View style={styles.selectedVehicleContainer}>
        <Image source={selectedVehicle.image} style={styles.vehicleImage} />
        <Text style={styles.vehicleName}>{selectedVehicle.name}</Text>
        <View style={styles.priceContainer}>
          <TouchableOpacity onPress={decrementPrice} style={styles.priceButton}><Text>-</Text></TouchableOpacity>
          <Text style={styles.priceText}>{currentPrice} $</Text>
          <TouchableOpacity onPress={incrementPrice} style={styles.priceButton}><Text>+</Text></TouchableOpacity>
        </View>
      </View>

      {/* Vehicles List */}
      <FlatList
        horizontal
        data={mockVehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleVehicleSelect(item)} style={[styles.vehicleItem, item.id === selectedVehicle.id && styles.selectedItem]}>
            <Image source={item.image} style={styles.vehicleImageSmall} />
            <Text style={styles.vehicleNameSmall}>{item.name}</Text>
            <Text style={styles.priceSmall}>{item.basePrice} $</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.vehicleList}
      />

      {/* Services Tabs */}
      <FlatList
        horizontal
        data={services}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedService(item)} style={[styles.serviceTab, item === selectedService && styles.activeService]}>
            <Text style={styles.serviceText}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.servicesList}
      />
    </View>
  );
};

export default TripSummaryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "700", marginBottom: 16 },
  selectedVehicleContainer: { alignItems: "center", marginBottom: 24 },
  vehicleImage: { width: 120, height: 80, resizeMode: "contain" },
  vehicleName: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  priceContainer: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  priceButton: { padding: 8, backgroundColor: "#eee", borderRadius: 4, marginHorizontal: 8 },
  priceText: { fontSize: 16, fontWeight: "600" },
  vehicleList: { paddingVertical: 8 },
  vehicleItem: { alignItems: "center", marginRight: 16 },
  selectedItem: { borderWidth: 2, borderColor: "#007AFF", borderRadius: 8, padding: 4 },
  vehicleImageSmall: { width: 60, height: 40, resizeMode: "contain" },
  vehicleNameSmall: { fontSize: 12, fontWeight: "500", marginTop: 4 },
  priceSmall: { fontSize: 12, fontWeight: "500", marginTop: 2 },
  servicesList: { paddingVertical: 8, marginTop: 16 },
  serviceTab: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#eee", borderRadius: 16, marginRight: 8 },
  activeService: { backgroundColor: "#007AFF" },
  serviceText: { color: "#000", fontWeight: "600" },
});
