import { View, Text } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const animation = {
  cartEmpty: require("../../../assets/animations/cart.json"),
  loading: require("../../../assets/animations/loading-spin.json"),
  keyLogin: require("../../../assets/animations/key-login.json"),
  shoppingbasket: require("../../../assets/animations/shoppingbasket.json"),
  cartAnimation: require("../../../assets/animations/cartAnimation.json"),
};
function AnimatedLottie({ lattieName = "", autoPlay = true, loop = true }) {
  const selectedAnimation = animation[lattieName];

  return (
    <View>
      <AnimatedLottieView
        style={{ width: "100%", top: 0 }}
        source={selectedAnimation}
        autoPlay={autoPlay}
        loop={loop}
      />
    </View>
  );
}
export default AnimatedLottie;
