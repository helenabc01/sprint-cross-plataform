import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../app/navigation/types";

import { colors } from "../assets/colors";

type Props = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;

export default function ForgotPassword({ navigation }: Props) {
  const [email, setEmail] = useState("");

  return (
    <ImageBackground
      source={require("../assets/img/background.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Image
          source={require("../assets/img/icon-motiva-purple.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/img/greenV.png")}
          style={styles.green}
          resizeMode="contain"
        />

        <Text style={styles.description}>
          Para recuperar a senha é necessário confirmar seu email para o envio
          do código
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("VerifyCode")}
        >
          <Text style={styles.buttonText}>ENVIAR EMAIL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.outlineText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "82%",
    height: "85%",

    backgroundColor: "#fff",

    borderRadius: 20,

    padding: 30,

    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 50,
  },

  green: {
    width: 100,
    height: 40,

    marginTop: 5,
  },

  description: {
    marginTop: 50,

    textAlign: "center",

    color: "#666",

    fontSize: 13,

    lineHeight: 18,
  },

  input: {
    width: "100%",

    height: 45,

    borderWidth: 1,

    borderColor: "#333",

    borderRadius: 8,

    marginTop: 30,

    paddingHorizontal: 12,

    fontSize: 14,
  },

  button: {
    width: 135,

    height: 45,

    backgroundColor: colors.primary,

    borderRadius: 10,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 60,
  },

  buttonText: {
    color: "#fff",

    fontWeight: "700",
  },

  outlineButton: {
    width: 135,

    height: 45,

    borderWidth: 1,

    borderColor: colors.primary,

    borderRadius: 10,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 8,
  },

  outlineText: {
    color: colors.primary,

    fontWeight: "700",
  },
});
