import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal } from "react-native";
import MapView, { Marker, MapEvent } from "react-native-maps";

type Location = {
  latitude: number;
  longitude: number;
  name: string;
};

// Mock previous locations
const mockHistory = [
  { name: "Airport" },
  { name: "Hotel" },
  { name: "Shopping Center" },
];

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

export default DestinationOverlay;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  map: {
    flex: 1,
  },
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
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600",
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
  historyItem: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginRight: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  confirmText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    flex: 1,
  },
  cancelText: { color: "#000", textAlign: "center", fontWeight: "600" },
});
