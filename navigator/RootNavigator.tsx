import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

export type RootStack = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
