import React from "react";
import NvDsg from "./pages/NvDsg";
import PageAccueil from "./pages/PageAccueil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PageAcceuil" component={PageAccueil} />
        <Stack.Screen name="NvDsg" component={NvDsg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
