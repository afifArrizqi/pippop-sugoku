import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Game from "./components/Game";
import Home from "./components/Home";
import Result from "./components/Result";
import Solution from "./components/Solution";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={Styles} />
        <Stack.Screen name="Game" component={Game} options={Styles} />
        <Stack.Screen name="Result" component={Result} options={Styles} />
        <Stack.Screen name="Solution" component={Solution} options={Styles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styles = {
  title: "SUGOKU",
  headerStyle: { backgroundColor: "#fa3476" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
