import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import MapView, { Marker, MapEvent } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

type Location = {
  latitude: number;
  longitude: number;
  name: string;
};

const mockHistory = [
  { name: "Airport" },
  { name: "Hotel" },
  { name: "Shopping Mall" },
];

const DestinationSearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { fromLocation, toLocation: initialToLocation } = route.params;

  const [fromLocation, setFromLocation] = useState<Location>(fromLocation);
  const [toLocation, setToLocation] = useState<Location>(initialToLocation || { latitude: 0, longitude: 0, name: "" });
  const [activeField, setActiveField] = useState<"from" | "to">("to");

  const handleMapPress = (e: MapEvent) => {
    const coords = e.nativeEvent.coordinate;
    if (activeField === "from") {
      setFromLocation({ ...fromLocation, latitude: coords.latitude, longitude: coords.longitude });
    } else {
      setToLocation({ ...toLocation, latitude: coords.latitude, longitude: coords.longitude });
    }
  };

  const handleHistorySelect = (locationName: string) => {
    if (activeField === "from") setFromLocation({ ...fromLocation, name: locationName });
    else setToLocation({ ...toLocation, name: locationName });
  };

  const handleConfirm = () => {
    navigation.navigate("TripSummaryScreen", { fromLocation, toLocation });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: fromLocation.latitude,
          longitude: fromLocation.longitude,
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

        <Text style={styles.label}>Previous Searches:</Text>
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

        <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
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
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  historyItem: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginRight: 8,
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "600",
  },
});
