import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FlexWidthButton from "../buttons/flexWidthButton";
import { useNavigation } from "@react-navigation/native";
import { AxiosInstance } from "../../utils/constants";

const ProductCardCart = ({
  productTitle,
  sourceImage,
  productBrand,
  productStock,
  discountPercentage,
  price,
  productId,
  screenName,
  deleteCartItem,
  saveForLatter,
}) => {
  const { navigate } = useNavigation();
  //console.log(productTitle, productId);

  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.imageView}>
          <TouchableOpacity
            onPress={() =>
              navigate("StackProductDetailsScreen", {
                productId: productId,
                screenName: screenName,
              })
            }
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
              source={sourceImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rightColumn}>
          <TouchableOpacity
            onPress={() =>
              navigate("StackProductDetailsScreen", {
                productId: productId,
                screenName: screenName,
              })
            }
          >
            <Text style={{ fontSize: 15, fontWeight: 500 }}>
              {productTitle}
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 14, fontWeight: 300 }}>{productBrand}</Text>
          {productStock ? (
            <Text style={{ color: "green" }}>In stock</Text>
          ) : (
            <Text style={{ color: "red" }}>Out of stock</Text>
          )}

          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              width: "100%",
              gap: 15,
              paddingLeft: 10,
              paddingTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: 300 }}>£</Text>
              <Text style={{ fontSize: 22, fontWeight: 600 }}>{price}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            {discountPercentage && (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: "red",
                  paddingLeft: 10,
                }}
              >
                - {discountPercentage}%
              </Text>
            )}
            {discountPercentage && (
              <View
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  width: "100%",
                  gap: 3,
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 300 }}>RRP:</Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    textDecorationLine: "line-through",
                  }}
                >
                  £{(price / (1 - discountPercentage / 100)).toFixed(2)}
                </Text>
              </View>
            )}
          </View>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <FlexWidthButton
              backgroundColor={"white"}
              title={"Delete"}
              onPress={() => deleteCartItem(productId)}
              //onPress={deleteCartItem}
            />
            <FlexWidthButton
              backgroundColor={"white"}
              title={"Save for later"}
              onPress={saveForLatter}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCardCart;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    borderWidth: 5,
    borderColor: "#F7F8F8",
    marginTop: 5,
    gap: 20,
    backgroundColor: "#F7F8F8",
  },
  imageView: {
    width: 150,
    height: 160,
    backgroundColor: "white",
    //paddingHorizontal: 25,
    // borderWidth: 1,
  },
  rightColumn: {
    flexDirection: "column",
    width: "60%",
    gap: 3,
  },
});
