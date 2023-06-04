import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const titles = {
  smartphones: "Keep shopping for mobile phones",
  laptops: "Browse similar",
  skincare: "Buy it again",
  fragrances: "Recommended for you",
  groceries: "An item you might like",
};

const ProductCardOne = ({ products, screenName }) => {
  //console.log("ProductCardOne ScreenName", screenName);
  const { navigate } = useNavigation();

  const renderProduct = ({ item }) => {
    let selectedTitle = "";

    for (let i in titles) {
      if (i === item?.category) {
        selectedTitle = titles[i];
        break;
      } else {
        selectedTitle = "Recommended for you";
      }
    }

    return (
      // <TouchableOpacity
      //   onPress={() =>
      //     navigate("Categories", {
      //       screen: "StackProductDetailsScreen",
      //       params: { product: item },
      //     })
      //   }
      // >
      <TouchableOpacity
        onPress={() =>
          navigate("StackProductDetailsScreen", {
            productId: item?.id,
            screenName: screenName,
          })
        }
      >
        <View style={styles.boxWrapper}>
          <Text>{selectedTitle}</Text>
          <Image
            source={{ uri: item?.thumbnail }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const selectedProducts = [
    products[15],
    products[7],
    products[11],
    products[4],
    products[20],
    products[22],
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={selectedProducts}
        horizontal
        renderItem={renderProduct}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductCardOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 165,
    paddingHorizontal: 10,
    height: 200,
    width: "100%",
    //backgroundColor: "#0000004D",
  },
  boxWrapper: {
    flex: 1,
    width: 130,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "black", // Gölgenin rengi
    shadowOffset: { width: 0, height: 3 }, // Gölgenin konumu (genişlik ve yükseklik)
    shadowOpacity: 0.2, // Gölgenin opaklığı
    shadowRadius: 2, // Gölgenin yayılma yarıçapı
    elevation: 2, // Android'de gölgeyi etkinleştirir
  },
});
