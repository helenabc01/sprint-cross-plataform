import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UploadPage from "../../screens/UploadPage";
import MapPage from "../../screens/MapPage";
import HomePage from "../../screens/HomePage";
const Tab = createBottomTabNavigator();

function TabBar({ state, descriptors, navigation }: any) {
  const icons: Record<string, string> = {
    Home: "⌂",
    Upload: "↑",
    Map: "⊞",
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.tabItem, isFocused && styles.tabItemActive]}
            onPress={() => navigation.navigate(route.name)}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabIcon, isFocused && styles.tabIconActive]}>
              {icons[route.name]}
            </Text>
            <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    height: 64,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 16,
    gap: 2,
  },
  tabItemActive: {
    backgroundColor: "#6B4EFF",
  },
  tabIcon: {
    fontSize: 20,
    color: "#999",
  },
  tabIconActive: {
    color: "#fff",
  },
  tabLabel: {
    fontSize: 11,
    color: "#999",
    fontWeight: "500",
  },
  tabLabelActive: {
    color: "#fff",
  },
});
