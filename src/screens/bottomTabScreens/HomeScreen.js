import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from "../nativeStackScreens/HomeScreens/HomeStackScreen";
import ProductDetailsStackScreen from "../nativeStackScreens/HomeScreens/ProductDetailsStackScreen";
import ProductsListStackScreen from "../nativeStackScreens/HomeScreens/ProductsListStackScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackHomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StackHomeScreen" component={HomeStackScreen} />
      <Stack.Screen
        name="StackProductsListScreen"
        component={ProductsListStackScreen}
      />
      <Stack.Screen
        name="StackProductDetailsScreen"
        component={ProductDetailsStackScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeScreen;
