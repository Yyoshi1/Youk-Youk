import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

// 
type VehicleType = {
  id: string;
  name: string;
  image: any; // 
  basePrice: number; // 
};

// 
const vehicles: VehicleType[] = [
  { id: "ride", name: "Ride", image: require("../assets/ride.png"), basePrice: 5 },
  { id: "comfort", name: "Comfort", image: require("../assets/comfort.png"), basePrice: 8 },
  { id: "bike", name: "Bike", image: require("../assets/bike.png"), basePrice: 3 },
  { id: "youkyouk", name: "Youkyouk", image: require("../assets/youkyouk.png"), basePrice: 10 },
  { id: "travel", name: "Travel", image: require("../assets/travel.png"), basePrice: 15 },
  { id: "shipping", name: "Shipping", image: require("../assets/shipping.png"), basePrice: 12 },
  { id: "company", name: "Company", image: require("../assets/company.png"), basePrice: 20 },
];

const TripSummaryScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { fromLocation, toLocation } = (route.params as any);

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>(vehicles[0]);
  const [price, setPrice] = useState<number>(selectedVehicle.basePrice);

  const handlePriceChange = (amount: number) => {
    const newPrice = price + amount;
    if (newPrice >= 0) setPrice(newPrice);
  };

  const handleConfirmTrip = () => {
    // 
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trip Summary</Text>
      <Text style={styles.locationText}>From: {fromLocation.name}</Text>
      <Text style={styles.locationText}>To: {toLocation.name}</Text>

      <View style={styles.selectedVehicle}>
        <Image source={selectedVehicle.image} style={styles.vehicleImage} />
        <Text style={styles.vehicleName}>{selectedVehicle.name}</Text>
        <Text style={styles.vehiclePrice}>${price.toFixed(2)}</Text>
        <View style={styles.priceControls}>
          <TouchableOpacity onPress={() => handlePriceChange(-1)} style={styles.priceButton}>
            <Text style={styles.priceButtonText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePriceChange(1)} style={styles.priceButton}>
            <Text style={styles.priceButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.otherVehiclesLabel}>Other Vehicles:</Text>
      <FlatList
        data={vehicles.filter((v) => v.id !== selectedVehicle.id)}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.vehicleItem}
            onPress={() => {
              setSelectedVehicle(item);
              setPrice(item.basePrice);
            }}
          >
            <Image source={item.image} style={styles.vehicleItemImage} />
            <Text style={styles.vehicleItemName}>{item.name}</Text>
            <Text style={styles.vehicleItemPrice}>${item.basePrice.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <TouchableOpacity onPress={handleConfirmTrip} style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TripSummaryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  locationText: { fontSize: 16, marginBottom: 4 },
  selectedVehicle: {
    alignItems: "center",
    marginVertical: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
  },
  vehicleImage: { width: 100, height: 60, resizeMode: "cover", marginBottom: 8 },
  vehicleName: { fontSize: 16, fontWeight: "600" },
  vehiclePrice: { fontSize: 18, fontWeight: "700", marginVertical: 8 },
  priceControls: { flexDirection: "row", gap: 12 },
  priceButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  priceButtonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  otherVehiclesLabel: { fontSize: 16, fontWeight: "600", marginVertical: 12 },
  vehicleItem: {
    alignItems: "center",
    marginRight: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
  },
  vehicleItemImage: { width: 60, height: 40, resizeMode: "cover", marginBottom: 4 },
  vehicleItemName: { fontSize: 12 },
  vehicleItemPrice: { fontSize: 12, fontWeight: "600" },
  confirmButton: {
    marginTop: 24,
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
  },
  confirmText: { color: "#fff", textAlign: "center", fontWeight: "700", fontSize: 16 },
});
