import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartStackScreen from "../nativeStackScreens/CartScreens/CartStackScreen";
import ProductDetailsStackScreen from "../nativeStackScreens/HomeScreens/ProductDetailsStackScreen";

const Stack = createNativeStackNavigator();

const CartScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackCartScreen"
      screenOptions={{ headerShown: false, headerBackButtonMenuEnabled: true }}
    >
      <Stack.Screen name="StackCartScreen" component={CartStackScreen} />
      <Stack.Screen
        name="StackProductDetailsScreen"
        component={ProductDetailsStackScreen}
      />
    </Stack.Navigator>
  );
};

export default CartScreen;
