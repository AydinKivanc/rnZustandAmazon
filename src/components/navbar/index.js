import React, { useContext, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../utils/constants";
import useAmazonStore from "../../zustand/store";

const Navbar = ({ stateName, getStateFunctionName }) => {
  const categoriesNav = useAmazonStore((state) => state.categoriesData);
  const homeNav = useAmazonStore((state) => state.homeNavData);
  const cartNav = useAmazonStore((state) => state.cartNavData);
  const axiosCategories = useAmazonStore((state) => state.axiosCategories);
  const axiosHomeNav = useAmazonStore((state) => state.axiosHomeNav);
  const axiosCartNav = useAmazonStore((state) => state.axiosCartNav);

  useEffect(() => {
    if (getStateFunctionName === "axiosHomeNav") {
      axiosHomeNav();
    } else if (getStateFunctionName === "axiosCategories") {
      axiosCategories();
    } else if (getStateFunctionName === "axiosCartNav") {
      axiosCartNav();
    }
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[Colors.backgroundOne, Colors.backgroundTwo]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ height: 35 }}
    >
      <View style={styles.container}>
        <FlatList
          data={
            stateName === "categoriesNav"
              ? categoriesNav
              : stateName === "homeNav"
              ? homeNav
              : stateName === "cartNav"
              ? cartNav
              : []
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    //backgroundColor: '#009BA9',
    borderRadius: 10,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "grey",
  },
});

export default Navbar;
