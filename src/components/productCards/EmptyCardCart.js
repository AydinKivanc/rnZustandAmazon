import { View, Text, StyleSheet, Button } from "react-native";
import AnimatedLottie from "../animatedLotties";
import React from "react";

const EmptyCardCart = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.animationView}>
          <AnimatedLottie
            lattieName="shoppingbasket"
            autoPlay="true"
            loop="true"
          />
        </View>
        <Text style={styles.textCard}>Your Amazon Cart is empty</Text>
      </View>
    </View>
  );
};

export default EmptyCardCart;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    //borderWidth: 1,
    marginTop: 10,
    gap: 5,
  },
  animationView: {
    width: 180,
    height: "100%",
  },
  textCard: {
    fontSize: 16,
    fontWeight: 400,
  },
});
