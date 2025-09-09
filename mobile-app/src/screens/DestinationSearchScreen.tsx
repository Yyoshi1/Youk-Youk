import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import MapView, { Marker, MapEvent } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

// 
type Location = {
  latitude: number;
  longitude: number;
  name: string;
};

// 
const mockHistory = [
  { name: "Airport", latitude: 37.615223, longitude: -122.389977 },
  { name: "Hotel", latitude: 37.790841, longitude: -122.401042 },
  { name: "Mall", latitude: 37.784173, longitude: -122.407195 },
];

const DestinationSearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userLocation: Location = (route.params as any).userLocation;

  const [fromLocation, setFromLocation] = useState<Location>(userLocation);
  const [toLocation, setToLocation] = useState<Location>({ latitude: 0, longitude: 0, name: "" });
  const [activeField, setActiveField] = useState<"from" | "to">("from");

  const handleMapPress = (e: MapEvent) => {
    const coords = e.nativeEvent.coordinate;
    if (activeField === "from") {
      setFromLocation({ latitude: coords.latitude, longitude: coords.longitude, name: `Manual (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)})` });
    } else {
      setToLocation({ latitude: coords.latitude, longitude: coords.longitude, name: `Manual (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)})` });
    }
  };

  const handleHistorySelect = (location: Location) => {
    if (activeField === "from") setFromLocation(location);
    else setToLocation(location);
  };

  const handleConfirm = () => {
    navigation.navigate("TripSummary", { fromLocation, toLocation });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={{ latitude: fromLocation.latitude, longitude: fromLocation.longitude }} pinColor="green" />
        <Marker coordinate={{ latitude: toLocation.latitude, longitude: toLocation.longitude }} pinColor="red" />
      </MapView>

      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => setActiveField("from")} style={[styles.input, activeField === "from" && styles.activeInput]}>
          <TextInput value={fromLocation.name} onChangeText={(text) => setFromLocation({ ...fromLocation, name: text })} placeholder="Current Location" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveField("to")} style={[styles.input, activeField === "to" && styles.activeInput]}>
          <TextInput value={toLocation.name} onChangeText={(text) => setToLocation({ ...toLocation, name: text })} placeholder="Destination" />
        </TouchableOpacity>

        <Text style={styles.label}>Previous Locations:</Text>
        <FlatList
          data={mockHistory}
          horizontal
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleHistorySelect(item)} style={styles.historyItem}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  activeInput: {
    borderColor: "#007AFF",
    borderWidth: 2,
  },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 8 },
  historyItem: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginRight: 8,
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  confirmText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});
