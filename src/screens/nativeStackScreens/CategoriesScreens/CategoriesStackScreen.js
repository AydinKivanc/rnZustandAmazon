import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React from "react";
import Input from "../../../components/input";
import { Colors } from "../../../utils/constants";
import Navbar from "../../../components/navbar";
import LinearGradient from "react-native-linear-gradient";
import useAmazonStore from "../../../zustand/store";

const CategoriesStackScreen = () => {
  const products = useAmazonStore((state) => state.productsData);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.backgroundOne, Colors.backgroundTwo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        //style={styles.linearGradient}
      >
        <Input />
      </LinearGradient>
      <View style={styles.navbar}>
        <Navbar
          stateName={"categoriesNav"}
          getStateFunctionName={"axiosCategories"}
        />
      </View>
      <View>
        <Text>Categories Screensss</Text>
      </View>
      <FlatList
        data={products}
        renderItem={(props) => (
          <View style={{ paddingVertical: 5 }}>
            <Text>{props.item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputBackground: {
    backgroundColor: Colors.background,
  },
  navbar: {
    height: 35,
  },
});

export default CategoriesStackScreen;
