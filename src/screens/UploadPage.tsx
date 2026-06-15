import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

const PURPLE = "#6B4EFF";
const GREEN = "#2E7D32";
const ORANGE = "#F57C00";
const RED = "#D32F2F";

type Level = 1 | 2 | 5;

const levelColors: Record<Level, { bg: string; text: string }> = {
  1: { bg: "#E8F5E9", text: GREEN },
  2: { bg: "#FFF8E1", text: ORANGE },
  5: { bg: "#FFEBEE", text: RED },
};

const results = [
  {
    id: "VF-8829",
    level: 1 as Level,
    title: "Reconhecimento concluído ✓",
    desc: "Objeto identificado com 98% de confiança.",
    image: require("../assets/img/grama-curta.png"),
  },
  {
    id: "VF-8830",
    level: 2 as Level,
    title: "Processando frames 🙂",
    desc: "Oclusão parcial detectada no segundo 04.",
    image: require("../assets/img/image9.png"),
  },
  {
    id: "VF-8831",
    level: 5 as Level,
    title: "Erro de leitura 🔴",
    desc: "Formato de arquivo incompatível ou corrompido.",
    image: require("../assets/img/image10.png"),
  },
];

export default function UploadPage() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoRow}>
          <Image
            source={require("../assets/img/greenV.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          style={styles.uploadCard}
          activeOpacity={0.8}
          onPress={() => setUploaded(true)}
        >
          <View style={styles.uploadIconWrapper}>
            <Text style={styles.uploadIconEmoji}>☁️</Text>
          </View>

          <Text style={styles.uploadTitle}>
            Faça upload para{"\n"}reconhecimento
          </Text>

          <Text style={styles.uploadDesc}>
            Envie vídeos MP4 ou MOV para análise instantânea de fluxo e
            movimento.
          </Text>

          <View style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>UPLOAD</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Imagens relacionadas ao vídeo</Text>

        {results.map((item) => {
          const lc = levelColors[item.level];

          return (
            <View key={item.id} style={styles.resultCard}>
              <View style={styles.thumb}>
                <Image
                  source={item.image}
                  style={styles.thumbImage}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.resultInfo}>
                <View style={styles.resultTopRow}>
                  <Text style={styles.resultId}>ID: {item.id}</Text>

                  <View style={[styles.levelBadge, { backgroundColor: lc.bg }]}>
                    <Text style={[styles.levelText, { color: lc.text }]}>
                      LEVEL {item.level}
                    </Text>
                  </View>
                </View>

                <Text style={styles.resultTitle}>{item.title}</Text>

                <Text style={styles.resultDesc}>{item.desc}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F6FB" },
  scroll: { padding: 20 },

  header: { marginBottom: 20 },
  greenVLogo: { fontSize: 22, fontWeight: "700" },
  greenVGreen: { color: "#2E7D32", fontWeight: "800" },
  greenVCheck: { color: "#2E7D32" },

  // Upload card
  uploadCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1.5,
    borderColor: "#EDE9FF",
    borderStyle: "dashed",
  },
  uploadIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#F0EEFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  uploadIconEmoji: { fontSize: 32 },
  uploadTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a2e",
    textAlign: "center",
    marginBottom: 8,
  },
  uploadDesc: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: PURPLE,
    borderRadius: 12,
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  uploadButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 1.2,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 12,
  },

  // Result cards
  resultCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  thumb: {
    width: 72,
    height: 72,
    borderRadius: 10,
    backgroundColor: "#E8EAF0",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  resultInfo: { flex: 1 },
  resultTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  resultId: { fontSize: 11, color: "#999", fontWeight: "600" },
  levelBadge: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  levelText: { fontSize: 10, fontWeight: "700" },
  resultTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 3,
  },
  resultDesc: { fontSize: 12, color: "#888", lineHeight: 17 },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 150,
    height: 50,
  },

  thumbImage: {
    width: "100%",
    height: "100%",
  },
});
