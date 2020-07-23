import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { Text } from "react-native";
import Navigation from "./src/Navigation";

export default function app() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
