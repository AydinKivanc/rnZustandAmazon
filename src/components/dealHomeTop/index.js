import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DealHomeTop = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/homeScreenAdd/deal_home_top.png")}
        style={{
          opacity: 1,
          height: 95,
          width: "100%",
          //resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default DealHomeTop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 374,
    height: 95,
    width: "100%",
    backgroundColor: "#0000004D",
  },
});
