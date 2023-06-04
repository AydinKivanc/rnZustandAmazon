import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackScreen from "../nativeStackScreens/UserStackScreens/AuthStackScreen";
import ProfileStackScreen from "../nativeStackScreens/UserStackScreens/ProfileStackScreen";
import useAmazonStore from "../../zustand/store";

const Stack = createNativeStackNavigator();

const UserScreen = ({ navigation, route }) => {
  const user = useAmazonStore((state) => state.user);
  const initialRouteName = user.name ? "StackProfileScreen" : "StackAuthScreen";

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      {user.name ? (
        <Stack.Screen
          name="StackProfileScreen"
          component={ProfileStackScreen}
        />
      ) : (
        <Stack.Screen name="StackAuthScreen" component={AuthStackScreen} />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default UserScreen;
