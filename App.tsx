import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import CustomersScreen from "./screens/CustomersScreen";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    // @ts-ignore className
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
