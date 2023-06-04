import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesStackScreen from "../nativeStackScreens/CategoriesScreens/CategoriesStackScreen";

const Stack = createNativeStackNavigator();

const CategoriesScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackCategoryScreen"
      screenOptions={{ headerShown: false, headerBackButtonMenuEnabled: true }}
    >
      <Stack.Screen
        name="StackCategoryScreen"
        component={CategoriesStackScreen}
      />
    </Stack.Navigator>
  );
};

export default CategoriesScreen;
