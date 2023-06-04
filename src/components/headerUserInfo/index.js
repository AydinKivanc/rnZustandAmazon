import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../utils/constants";
import useAmazonStore from "../../zustand/store";

const HeaderUserInfo = () => {
  const user = useAmazonStore((state) => state.user);

  return (
    <View style={styles.container}>
      <Icon name="ios-location-outline" style={styles.itemIcon} />
      <View>
        <Text style={styles.itemText}>
          {" "}
          Deliver to {user.name?.toUpperCase()} -{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.itemText}>{user.address}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: Colors.background,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
  },
  itemIcon: {
    fontSize: 18,
    color: "grey",
    fontWeight: "600",
  },
});
export default HeaderUserInfo;
