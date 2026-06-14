import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { colors } from "../assets/colors";

export function LoadPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/icon-motiva.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",

    backgroundColor: colors.primary,

    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 150,
  },
});
