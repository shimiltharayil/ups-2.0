import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import CustomersScreen from "./screens/CustomersScreen";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:5001/api/ordered-sponge",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore className
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
