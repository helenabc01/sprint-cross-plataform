import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface InputProps extends TextInputProps {}

export function Input(props: InputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor="#555"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 42,

    borderWidth: 2,
    borderColor: "#333",

    borderRadius: 10,

    paddingHorizontal: 14,

    fontSize: 14,

    color: "#333",
  },
});
