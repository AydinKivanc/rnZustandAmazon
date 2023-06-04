import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import useAmazonStore from "../../../zustand/store";
import AnimatedLottie from "../../../components/animatedLotties";
import Input from "../../../components/input";
import { useNavigation } from "@react-navigation/native";

const AuthStackScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useAmazonStore((state) => state.user);
  const userToken = useAmazonStore((state) => state.userToken);
  const login = useAmazonStore((state) => state.login);
  const navigation = useNavigation();

  const onLoginBtnClick = async () => {
    try {
      const response = await login(email, password);
      // Handle login success
      navigation.navigate("StackProfileScreen");
    } catch (error) {
      console.error("Error onLoginBtnClick:", error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.animationContainer}>
        <View style={styles.animationView}>
          <AnimatedLottie lattieName="keyLogin" autoPlay="true" loop="true" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.loginText}>Login</Text>
        <Input
          placeholder="Email ID"
          value={email}
          onChangeText={(t) => setEmail(t)}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <Input
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Login" onPress={onLoginBtnClick} />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>Demo User ID= c10@user.com</Text>
          <Text>Demo User Password= 123123</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  animationContainer: { alignItems: "center" },
  animationView: {
    width: 200,
    paddingHorizontal: 25,
    //borderWidth: 1,
  },
  textContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    //borderWidth: 1,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});

export default AuthStackScreen;
