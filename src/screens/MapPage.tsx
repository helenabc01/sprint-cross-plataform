import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const PURPLE = "#6B4EFF";
const GREEN = "#2E7D32";
const ORANGE = "#F57C00";
const RED = "#D32F2F";

export default function MapPage() {
  const [showDetail, setShowDetail] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.searchWrapper}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search route or area..."
          placeholderTextColor="#aaa"
        />
        <Text style={styles.micIcon}>🎤</Text>
      </View>

      <View style={styles.mapArea}>
        <Text style={styles.mapPlaceholderText}>🗺️</Text>
        <Text style={styles.mapHint}>Mapa interativo aqui</Text>
        <Text style={styles.mapHintSub}>
          Integre com react-native-maps ou MapLibre
        </Text>

        <View style={styles.zoomControls}>
          <TouchableOpacity style={styles.zoomBtn}>
            <Text style={styles.zoomText}>＋</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomBtn}>
            <Text style={styles.zoomText}>－</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.locBtn}>
          <Text>📍</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleDetail}
          onPress={() => setShowDetail((v) => !v)}
        >
          <Text style={styles.toggleDetailText}>
            {showDetail ? "▼ Fechar" : "▲ Detalhes"}
          </Text>
        </TouchableOpacity>
      </View>

      {showDetail && (
        <View style={styles.panel}>
          <View style={styles.handle} />

          <View style={styles.routeBadge}>
            <View style={styles.routeIcon}>
              <Text style={{ fontSize: 18 }}>🌿</Text>
            </View>
            <View>
              <Text style={styles.routeName}>MOTIVA</Text>
              <Text style={styles.routeSub}>GREEN V</Text>
            </View>
          </View>

          <Text style={styles.panelSectionLabel}>RESUMO DA MALHA</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>291</Text>
              <Text style={styles.statLabel}>Trechos</Text>
            </View>
            <View style={[styles.statDivider, { borderColor: ORANGE }]} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: ORANGE }]}>220</Text>
              <Text style={styles.statLabel}>Atenção</Text>
            </View>
            <View style={[styles.statDivider, { borderColor: RED }]} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: RED }]}>131</Text>
              <Text style={styles.statLabel}>Críticos</Text>
            </View>
          </View>

          <View style={styles.vegRow}>
            <View style={styles.vegLeft}>
              <Text style={styles.vegLabel}>NÍVEL DE VEGETAÇÃO (MÉDIO)</Text>
              <View style={styles.vegValueRow}>
                <Text style={styles.vegValue}>2,6 m</Text>
                <View style={[styles.vegBadge, { backgroundColor: "#FFF8E1" }]}>
                  <Text style={[styles.vegBadgeText, { color: ORANGE }]}>
                    Médio
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{ fontSize: 26 }}>🌱</Text>
          </View>

          {/* Trechos críticos + sync */}
          <View style={styles.critRow}>
            <View>
              <Text style={styles.critLabel}>TRECHOS CRÍTICOS</Text>
              <Text style={styles.critValue}>131</Text>
              <Text style={styles.critSub}>45% da malha</Text>
            </View>
            <View>
              <Text style={styles.critLabel}>ÚLTIMA ATUALIZAÇÃO</Text>
              <Text style={styles.critValue}>Hoje, 08:30</Text>
              <TouchableOpacity style={styles.syncBtn}>
                <Text style={styles.syncText}>↻ Sync Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Legend */}
          <View style={styles.legendRow}>
            <Text style={styles.legendTitle}>NÍVEL DE VEGETAÇÃO</Text>
            <View style={styles.legendItems}>
              {[
                { color: GREEN, label: "Baixo" },
                { color: ORANGE, label: "Médio" },
                { color: RED, label: "Alto" },
              ].map((l) => (
                <View key={l.label} style={styles.legendItem}>
                  <View style={[styles.dot, { backgroundColor: l.color }]} />
                  <Text style={styles.legendText}>{l.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F6FB" },

  // Search
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 12,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    zIndex: 10,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: "#333" },
  micIcon: { fontSize: 16 },

  // Map
  mapArea: {
    flex: 1,
    backgroundColor: "#D0DAE8",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  mapPlaceholderText: { fontSize: 52 },
  mapHint: { fontSize: 16, fontWeight: "600", color: "#555", marginTop: 8 },
  mapHintSub: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 32,
  },

  zoomControls: {
    position: "absolute",
    right: 14,
    top: 14,
    gap: 4,
  },
  zoomBtn: {
    width: 36,
    height: 36,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  zoomText: { fontSize: 20, color: "#333", fontWeight: "300" },

  locBtn: {
    position: "absolute",
    right: 14,
    top: 100,
    width: 36,
    height: 36,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  toggleDetail: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  toggleDetailText: { fontSize: 12, fontWeight: "600", color: PURPLE },

  // Panel
  panel: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 10,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },

  routeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PURPLE,
    borderRadius: 14,
    padding: 12,
    gap: 12,
    marginBottom: 16,
  },
  routeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  routeName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  routeSub: { color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: "600" },

  panelSectionLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 1,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  statItem: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 22, fontWeight: "800", color: "#1a1a2e" },
  statLabel: { fontSize: 11, color: "#999", marginTop: 2 },
  statDivider: { width: 1, height: 32, borderLeftWidth: 2 },

  vegRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  vegLeft: { flex: 1 },
  vegLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  vegValueRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  vegValue: { fontSize: 22, fontWeight: "800", color: "#1a1a2e" },
  vegBadge: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  vegBadgeText: { fontSize: 11, fontWeight: "700" },

  critRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  critLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  critValue: { fontSize: 15, fontWeight: "700", color: "#1a1a2e" },
  critSub: { fontSize: 11, color: "#999" },
  syncBtn: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  syncText: { fontSize: 12, color: PURPLE, fontWeight: "600" },

  legendRow: {},
  legendTitle: {
    fontSize: 10,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  legendItems: { flexDirection: "row", gap: 16 },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: 12, color: "#555" },
});
