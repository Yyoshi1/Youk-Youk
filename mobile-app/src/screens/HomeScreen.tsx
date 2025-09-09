import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, TextInput, ScrollView, Dimensions } from "react-native";
import MapView, { Marker, MapEvent } from "react-native-maps";

type Location = {
  latitude: number;
  longitude: number;
  name: string;
};

type VehicleType = {
  id: string;
  name: string;
  icon: string; // icon URL or local path
  price: number;
};

// Mock previous locations
const mockHistory = [
  { name: "Airport" },
  { name: "Hotel" },
  { name: "Shopping Center" },
];

// Mock vehicle types
const vehicleTypes: VehicleType[] = [
  { id: "ride", name: "Ride", icon: "🚗", price: 10 },
  { id: "comfort", name: "Comfort", icon: "🚙", price: 15 },
  { id: "bike", name: "Bike", icon: "🏍️", price: 5 },
  { id: "youkyouk", name: "Youkyouk Taxi", icon: "🚕", price: 12 },
  { id: "travel", name: "Travel", icon: "🚐", price: 20 },
  { id: "shipping", name: "Shipping", icon: "🚚", price: 25 },
  { id: "company", name: "Transport Company", icon: "🚛", price: 30 },
];

// Services Grid
const services = vehicleTypes.map((v) => ({ id: v.id, name: v.name, icon: v.icon }));

interface DestinationOverlayProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (fromLocation: Location, toLocation: Location) => void;
  userLocation: Location;
}

const DestinationOverlay: React.FC<DestinationOverlayProps> = ({ visible, onClose, onConfirm, userLocation }) => {
  const [activeField, setActiveField] = useState<"from" | "to">("from");
  const [fromLocation, setFromLocation] = useState<Location>(userLocation);
  const [toLocation, setToLocation] = useState<Location>({ latitude: 0, longitude: 0, name: "" });

  const handleMapPress = (e: MapEvent) => {
    const coords = e.nativeEvent.coordinate;
    if (activeField === "from") {
      setFromLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        name: `Manual Location (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)})`,
      });
    } else {
      setToLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        name: `Manual Location (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)})`,
      });
    }
  };

  const handleHistorySelect = (locationName: string) => {
    if (activeField === "from") setFromLocation({ ...fromLocation, name: locationName });
    else setToLocation({ ...toLocation, name: locationName });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <MapView
          style={styles.map}
          onPress={handleMapPress}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: fromLocation.latitude, longitude: fromLocation.longitude }} pinColor="green" />
          <Marker coordinate={{ latitude: toLocation.latitude, longitude: toLocation.longitude }} pinColor="red" />
        </MapView>

        <View style={styles.container}>
          <Text style={styles.label}>Select current location or destination:</Text>

          <TouchableOpacity onPress={() => setActiveField("from")} style={[styles.input, activeField === "from" && styles.activeInput]}>
            <TextInput
              value={fromLocation.name}
              onChangeText={(text) => setFromLocation({ ...fromLocation, name: text })}
              placeholder="Current Location"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveField("to")} style={[styles.input, activeField === "to" && styles.activeInput]}>
            <TextInput
              value={toLocation.name}
              onChangeText={(text) => setToLocation({ ...toLocation, name: text })}
              placeholder="Destination"
            />
          </TouchableOpacity>

          <Text style={styles.label}>Previous locations:</Text>
          <FlatList
            data={mockHistory}
            horizontal
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleHistorySelect(item.name)} style={styles.historyItem}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => onConfirm(fromLocation, toLocation)} style={styles.confirmButton}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const HomeScreen: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [userLocation] = useState<Location>({ latitude: 37.78825, longitude: -122.4324, name: "Current Location" });
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>(vehicleTypes[0]);
  const [fromLocation, setFromLocation] = useState<Location>(userLocation);
  const [toLocation, setToLocation] = useState<Location>({ latitude: 0, longitude: 0, name: "" });

  const handleConfirmDestination = (from: Location, to: Location) => {
    setFromLocation(from);
    setToLocation(to);
    setOverlayVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: fromLocation.latitude, longitude: fromLocation.longitude }} pinColor="green" />
        <Marker coordinate={{ latitude: toLocation.latitude, longitude: toLocation.longitude }} pinColor="red" />
      </MapView>

      {/* Top Menu Icon */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => alert("Open bottom menu")}>
        <Text style={{ fontSize: 24 }}>☰</Text>
      </TouchableOpacity>

      {/* Services Grid */}
      <View style={styles.servicesContainer}>
        {services.map((s) => (
          <TouchableOpacity key={s.id} style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>{s.icon}</Text>
            <Text style={styles.serviceText}>{s.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Vehicle Selection */}
      <View style={styles.vehicleScrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {vehicleTypes.map((v) => (
            <TouchableOpacity
              key={v.id}
              style={[styles.vehicleItem, selectedVehicle.id === v.id && styles.selectedVehicle]}
              onPress={() => setSelectedVehicle(v)}
            >
              <Text style={styles.vehicleIcon}>{v.icon}</Text>
              <Text style={styles.vehicleText}>{v.name}</Text>
              <Text style={styles.vehiclePrice}>${v.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <DestinationOverlay
        visible={overlayVisible}
        onClose={() => setOverlayVisible(false)}
        onConfirm={handleConfirmDestination}
        userLocation={userLocation}
      />

      {/* Destination Input Trigger */}
      <TouchableOpacity style={styles.destinationInput} onPress={() => setOverlayVisible(true)}>
        <Text>
          {fromLocation.name} → {toLocation.name || "Destination"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  menuIcon: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    zIndex: 1000,
  },
  servicesContainer: {
    position: "absolute",
    bottom: 150,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  serviceItem: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  serviceText: {
    fontSize: 12,
    textAlign: "center",
  },
  vehicleScrollContainer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    paddingHorizontal: 10,
  },
  vehicleItem: {
    width: 100,
    backgroundColor: "#fff",
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  selectedVehicle: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  vehicleIcon: { fontSize: 24, marginBottom: 4 },
  vehicleText: { fontSize: 12 },
  vehiclePrice: { fontSize: 12, fontWeight: "600" },
  destinationInput: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  map: { flex: 1 },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    maxHeight: "90%",
  },
  label: { fontSize: 14, marginBottom: 8, fontWeight: "600" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 12 },
  activeInput: { borderColor: "#007AFF", borderWidth: 2 },
  historyItem: { padding: 8, backgroundColor: "#eee", borderRadius: 8, marginRight: 8 },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
  confirmButton: { backgroundColor: "#007AFF", padding: 12, borderRadius: 8, flex: 1, marginRight: 8 },
  confirmText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  cancelButton: { backgroundColor: "#ccc", padding: 12, borderRadius: 8, flex: 1 },
  cancelText: { color: "#000", textAlign: "center", fontWeight: "600" },
});
