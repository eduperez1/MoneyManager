import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import {
  useFonts as useMerriweather,
  Merriweather_400Regular,
} from "@expo-google-fonts/merriweather";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [merriweatherLoaded] = useMerriweather({
    Merriweather_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!merriweatherLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>This is the money manager app</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
