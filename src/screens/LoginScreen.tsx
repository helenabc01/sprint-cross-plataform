import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Linking,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { colors } from "../assets/colors";

const { width } = Dimensions.get("window");

function MotivaLogo() {
  return (
    <View style={styles.logoRow}>
      <Image
        source={require("../assets/img/icon-motiva-purple.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}
function GreenVBadge() {
  return (
    <View style={styles.logoRow}>
      <Image
        source={require("../assets/img/greenV.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0eef8" />

      <ImageBackground
        source={require("../assets/img/background.png")}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.card}>
          <View style={styles.logoArea}>
            <MotivaLogo />
            <GreenVBadge />
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.forgotWrapper}>
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.85}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.newsWrapper}
          onPress={() => Linking.openURL("https://www.motiva.com.br/noticias/")}
        >
          <Text style={styles.newsIcon}>📰</Text>

          <Text style={styles.newsText}>Ver últimas notícias</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    overflow: "hidden",
  },

  decorLine: {
    position: "absolute",
    width: 2,
    backgroundColor: colors.secondary,
    borderRadius: 4,
  },

  card: {
    width: width * 0.82,
    backgroundColor: colors.wWhite,
    borderRadius: 20,
    paddingVertical: 36,
    paddingHorizontal: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  logo: {
    width: 150,
    height: 50,
  },
  form: {
    gap: 12,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.blackGray,
    backgroundColor: colors.white,
  },
  forgotWrapper: {
    alignSelf: "flex-end",
    marginTop: -4,
  },
  forgotText: {
    fontSize: 12,
    color: colors.primary,
  },
  button: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  newsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    gap: 6,
  },
  newsIcon: {
    fontSize: 14,
  },
  newsText: {
    fontSize: 13,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
