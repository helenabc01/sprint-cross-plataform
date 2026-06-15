import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoadPage } from "../../screens/Splash";
import LoginPage from "../../screens/LoginScreen";
import ForgotPassword from "../../screens/ForgotPass";
import type { RootStackParamList } from "./types";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Load" component={LoadPage} />

      <Stack.Screen name="Login" component={LoginPage} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="AppNavidation" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
