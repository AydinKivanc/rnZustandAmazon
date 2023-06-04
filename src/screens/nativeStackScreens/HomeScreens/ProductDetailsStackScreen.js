import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import { AxiosInstance, Colors } from "../../../utils/constants";
import Swiper from "react-native-swiper";
import LinearGradient from "react-native-linear-gradient";
import { useRoute, useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";
import FullWidthButton from "../../../components/buttons/fullWidthButton";
import useAmazonStore from "../../../zustand/store";

const getRandomNumberUser = () => {
  const min = 1;
  const max = 9999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const ProductDetailsStackScreen = () => {
  //const dimension = Dimensions.get("window");
  const axiosCart = useAmazonStore((state) => state.axiosCart);
  const [product, setProduct] = useState({
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  });
  const productRating = () => {
    const raitingNumber = product?.rating;
    return raitingNumber;
  };
  const [rating, setRating] = useState(productRating());
  const [rated, setRated] = useState(getRandomNumberUser());

  const { navigate } = useNavigation();
  const route = useRoute();
  const { productId, screenName } = route?.params;
  //console.log("Id", productId);
  //console.log("ProductDetailsStackScreen ScreenName", screenName);

  const fetchProduct = () => {
    AxiosInstance.get(`products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("fetchProduct", err);
      });
  };

  const addBasket = () => {
    AxiosInstance.post("basket", product)
      .then((res) => {
        if (res.status === 201 && res.data) {
          Alert.alert("Success", "Added to Basket");
        }
        axiosCart();
      })
      .catch((err) => {
        Alert.alert("Failed", "Could not add to Basket");
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const handleBuyNowButton = () => {
    console.log("Buy Now button is working");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.backgroundOne, Colors.backgroundTwo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        //style={styles.linearGradient}
      >
        <Input
          hasIcon
          iconName="arrow-back-outline"
          size={40}
          styleIcon={styles.backButtonIcon}
          onIconPress={() => navigate(screenName)}
        />
      </LinearGradient>
      <ScrollView>
        <View style={styles.productWrapper}>
          <View style={styles.brandStarWrapper}>
            <Text style={{ color: "green" }}>Brand: {product.brand}</Text>

            <View style={styles.lineWrapper}>
              <Text>{rating}</Text>
              <TouchableOpacity onPress={() => {}}>
                <StarRating
                  rating={rating}
                  onChange={setRating}
                  starSize={16}
                  starStyle={{ marginRight: -5 }}
                  enableSwiping={false}
                />
              </TouchableOpacity>
              <Text style={{ marginLeft: 10 }}>{rated}</Text>
            </View>
          </View>
          <Text style={{ width: "100%", padding: 10 }}>
            {product?.description}
          </Text>
          {/* <Image
          source={{ uri: product?.thumbnail }}
          style={styles.thumbnailImage}
        /> */}
          <View
            style={{
              height: 220,
              backgroundColor: "white",
            }}
          >
            <Swiper
              style={styles.swiperWrapper}
              loop={true}
              autoplay={true}
              transitionStyle="fade"
              autoplayTimeout={5}
              //showsPagination={false}
              paginationStyle={{
                bottom: -20,
              }}
            >
              {product?.images.map((image, index) => (
                <View key={index}>
                  <Image
                    source={{ uri: image }}
                    style={{
                      //width: Dimensions.get("window").width,
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="contain"
                  />
                </View>
              ))}
            </Swiper>
          </View>

          <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 25 }}>
            {product?.title}
          </Text>
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
            <Text style={{ fontSize: 30, fontWeight: 300, color: "red" }}>
              - {product?.discountPercentage}%
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 300 }}>£</Text>
              <Text style={{ fontSize: 30, fontWeight: 600 }}>
                {product?.price}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              width: "100%",
              gap: 15,
              paddingLeft: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 300 }}>RRP:</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 300,
                textDecorationLine: "line-through",
              }}
            >
              £
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </Text>
          </View>
          <View style={{ width: "95%", marginTop: 20, gap: 15 }}>
            <FullWidthButton
              title={"Add to Basket"}
              borderRadius={25}
              backgroundColor={"#ffda26"}
              onPress={addBasket}
            />
            <FullWidthButton
              title={"Buy Now"}
              borderRadius={25}
              onPress={handleBuyNowButton}
            />
          </View>
        </View>
      </ScrollView>
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
  backButtonIcon: {
    color: Colors.bgOne,
    marginLeft: -12,
    marginRight: 15,
  },
  productWrapper: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    padding: 10,
  },
  // thumbnailImage: {
  //   height: 300,
  //   width: "100%",
  //   resizeMode: "contain",
  // },
  brandStarWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  swiperWrapper: {},
  lineWrapper: {
    flexDirection: "row",
  },
});

export default ProductDetailsStackScreen;
