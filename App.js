import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import Navigator from "./navigation/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
