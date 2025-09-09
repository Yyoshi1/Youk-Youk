import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

// 
type ServiceType = {
  id: string;
  name: string;
  image: string; // path to vehicle image
};

const services: ServiceType[] = [
  { id: "ride", name: "Ride", image: require("../assets/ride.png") },
  { id: "comfort", name: "Comfort", image: require("../assets/comfort.png") },
  { id: "bike", name: "Bike", image: require("../assets/bike.png") },
  { id: "youkyouk", name: "Youkyouk", image: require("../assets/youkyouk.png") },
  { id: "travel", name: "Travel", image: require("../assets/travel.png") },
  { id: "shipping", name: "Shipping", image: require("../assets/shipping.png") },
  { id: "company", name: "Company", image: require("../assets/company.png") },
];

const HomeScreen: React.FC = () => {
  const [userLocation, setUserLocation] = useState({ latitude: 37.78825, longitude: -122.4324 });
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("DestinationSearch", { userLocation });
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
      >
        <Marker coordinate={userLocation} title="You" />
      </MapView>

      <View style={styles.bottomSheet}>
        <FlatList
          data={services}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.serviceItem}>
              <View style={styles.imageContainer}>
                <img source={item.image} style={styles.serviceImage} />
              </View>
              <Text style={styles.serviceName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity style={styles.searchBox} onPress={handleSearchPress}>
          <Text style={styles.searchText}>Where to?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 12,
  },
  serviceItem: { alignItems: "center", marginHorizontal: 8 },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 4,
  },
  serviceImage: { width: "100%", height: "100%", resizeMode: "cover" },
  serviceName: { fontSize: 12, fontWeight: "600" },
  searchBox: {
    marginTop: 12,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 12,
  },
  searchText: { fontSize: 16, color: "#333" },
});
