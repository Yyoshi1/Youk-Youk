import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DestinationSearchScreen from "./screens/DestinationSearchScreen";
import TripSummaryScreen from "./screens/TripSummaryScreen";

const Stack = createNativeStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DestinationSearchScreen" component={DestinationSearchScreen} />
      <Stack.Screen name="TripSummaryScreen" component={TripSummaryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
