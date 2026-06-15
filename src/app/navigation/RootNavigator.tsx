import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoadPage } from "../../screens/Splash ";
import LoginPage from "../../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Load" component={LoadPage} />

      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}
