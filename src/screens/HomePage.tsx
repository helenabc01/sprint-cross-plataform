import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

const PURPLE = "#6B4EFF";
const GREEN = "#2E7D32";
const RED = "#D32F2F";
const ORANGE = "#F57C00";

export default function HomePage() {
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

        <Text style={styles.subGreeting}>
          Sua eficiência hoje está 12% acima da média semanal.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>KM MONITORADOS</Text>
          <View style={styles.kmRow}>
            <Text style={styles.kmValue}>1.240</Text>
            <Text style={styles.kmUnit}> km</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.miniCard, { backgroundColor: "#FFF3F3" }]}>
            <View style={styles.miniCardHeader}>
              <Text style={styles.miniCardLabel}>ALERTAS</Text>
              <Text style={{ fontSize: 16 }}>⚠️</Text>
            </View>
            <Text style={[styles.miniCardValue, { color: RED }]}>12</Text>
            <Text style={styles.miniCardSub}>Críticos</Text>
          </View>

          <View style={[styles.miniCard, { backgroundColor: "#E8F5E9" }]}>
            <View style={styles.miniCardHeader}>
              <Text style={styles.miniCardLabel}>EQUIPES</Text>
              <Text style={{ fontSize: 16 }}>👥</Text>
            </View>
            <Text style={[styles.miniCardValue, { color: GREEN }]}>05</Text>
            <Text style={styles.miniCardSub}>Em campo</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Visão Geral da Malha</Text>
            <Text style={{ fontSize: 18 }}>⊞</Text>
          </View>
          <View>
            <Image
              source={require("../assets/img/MapPreview.png")}
              style={styles.map}
              resizeMode="contain"
            />
          </View>
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: GREEN }]} />
              <Text style={styles.legendText}>Ótimo</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: ORANGE }]} />
              <Text style={styles.legendText}>Alerta</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: RED }]} />
              <Text style={styles.legendText}>Crítico</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Últimos Uploads</Text>

          <View style={styles.uploadItem}>
            <Text style={styles.uploadIcon}>📄</Text>
            <View style={styles.uploadInfo}>
              <Text style={styles.uploadName}>Rodovia BR-101</Text>
              <Text style={styles.uploadTime}>Hoje, 09:45</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: "#E8F5E9" }]}>
              <Text style={[styles.badgeText, { color: GREEN }]}>
                ✓ Concluído
              </Text>
            </View>
          </View>

          <View style={styles.uploadItem}>
            <Text style={styles.uploadIcon}>☁️</Text>
            <View style={styles.uploadInfo}>
              <Text style={styles.uploadName}>Av. das Américas</Text>
              <Text style={styles.uploadTime}>Hoje, 10:20</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: "#F3F0FF" }]}>
              <Text style={[styles.badgeText, { color: PURPLE }]}>
                ↻ Processando
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85}>
          <Text style={styles.ctaText}>＋ INICIAR NOVA ANÁLISE</Text>
        </TouchableOpacity>

        <View style={{ height: 24 }} />
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

  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  subGreeting: { fontSize: 13, color: "#666", marginBottom: 16 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 1,
    marginBottom: 4,
  },
  kmRow: { flexDirection: "row", alignItems: "flex-end" },
  kmValue: { fontSize: 36, fontWeight: "800", color: "#1a1a2e" },
  kmUnit: { fontSize: 18, fontWeight: "600", color: "#666", marginBottom: 4 },

  row: { flexDirection: "row", gap: 12, marginBottom: 14 },
  miniCard: {
    flex: 1,
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  miniCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  miniCardLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.8,
  },
  miniCardValue: { fontSize: 28, fontWeight: "800" },
  miniCardSub: { fontSize: 12, color: "#888", marginTop: 2 },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 12,
  },
  mapPlaceholder: {
    height: 130,
    backgroundColor: "#E8EAF0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  mapPlaceholderText: { fontSize: 28 },
  legend: { flexDirection: "row", gap: 16 },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: 12, color: "#555" },

  uploadItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    gap: 10,
  },
  uploadIcon: { fontSize: 22 },
  uploadInfo: { flex: 1 },
  uploadName: { fontSize: 14, fontWeight: "600", color: "#1a1a2e" },
  uploadTime: { fontSize: 12, color: "#999" },
  badge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 11, fontWeight: "600" },

  ctaButton: {
    backgroundColor: PURPLE,
    borderRadius: 14,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  ctaText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.8,
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
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
