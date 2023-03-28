import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import React from "react";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { TabStackParamsList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../navigator/RootNavigator";
import { useLayoutEffect, useState } from "react";
import { Input } from "@rneui/base";
export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, "Customers">,
  NativeStackNavigationProp<RootStack>
>;

const CustomersScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{
          uri: "https://links.papareact.com/3jc",
        }}
        className="w-full h-64"
      />
      <View  className="bg-white pt-5 pb-0 px-5 ">
        <Input
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Search by Customer"
        />
      </View>
    </ScrollView>
  );
};

export default CustomersScreen;
