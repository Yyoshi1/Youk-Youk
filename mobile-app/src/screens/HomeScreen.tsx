import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import DestinationOverlay from "../components/DestinationOverlay";

// 
const services = [
  { id: "ride", name: "Ride", image: require("../assets/ride.png") },
  { id: "comfort", name: "Comfort", image: require("../assets/comfort.png") },
  { id: "bike", name: "Bike", image: require("../assets/bike.png") },
  { id: "youkyouk", name: "Youkyouk", image: require("../assets/youkyouk.png") },
  { id: "travel", name: "Travel", image: require("../assets/travel.png") },
  { id: "shipping", name: "Shipping", image: require("../assets/shipping.png") },
  { id: "company", name: "Company", image: require("../assets/company.png") },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [userLocation, setUserLocation] = useState({ latitude: 37.78825, longitude: -122.4324, name: "" });

  const handleConfirmDestination = (fromLocation: any, toLocation: any) => {
    setOverlayVisible(false);
    navigation.navigate("TripSummaryScreen", { fromLocation, toLocation });
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
        <Marker coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }} pinColor="green" />
      </MapView>

      <TouchableOpacity style={styles.menuButton} onPress={() => setOverlayVisible(true)}>
        <Text style={{ fontSize: 24 }}>☰</Text>
      </TouchableOpacity>

      <View style={styles.serviceGrid}>
        <FlatList
          data={services}
          numColumns={4}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.serviceItem}>
              <Image source={item.image} style={styles.serviceImage} />
              <Text style={styles.serviceName}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <DestinationOverlay
        visible={overlayVisible}
        onClose={() => setOverlayVisible(false)}
        onConfirm={handleConfirmDestination}
        userLocation={userLocation}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    top: 40,
    left: 16,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    elevation: 3,
  },
  serviceGrid: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "40%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
  },
  serviceItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 4,
  },
  serviceImage: { width: 50, height: 50, resizeMode: "cover" },
  serviceName: { fontSize: 12, textAlign: "center", marginTop: 4 },
});
