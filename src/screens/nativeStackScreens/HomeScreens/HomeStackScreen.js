import { View, Text, StyleSheet, FlatList, Button, Image } from "react-native";
import React, { useEffect } from "react";
import Input from "../../../components/input";
import { Colors } from "../../../utils/constants";
import Navbar from "../../../components/navbar";
import Swiper from "react-native-swiper";
import HomeSlider from "../../../components/homeSlider";
import AnimatedLottie from "../../../components/animatedLotties";
import useAmazonStore from "../../../zustand/store";
import LinearGradient from "react-native-linear-gradient";
import HeaderUserInfo from "../../../components/headerUserInfo";
import ProductCardOne from "../../../components/productCards/ProductCardOne";
import DealHomeTop from "../../../components/dealHomeTop";

const HomeStackScreen = () => {
  const user = useAmazonStore((state) => state.user);
  const axiosProducts = useAmazonStore((state) => state.axiosProducts);
  const products = useAmazonStore((state) => state.productsData);
  const axiosCart = useAmazonStore((state) => state.axiosCart);

  useEffect(() => {
    axiosProducts();
    axiosCart();
  }, []);

  if (products === null) {
    <View>
      <AnimatedLottie lattieName="loading" autoPlay="true" loop="true" />
    </View>;
  }

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
        <Navbar stateName="homeNav" getStateFunctionName="axiosHomeNav" />
      </View>
      {user.name && (
        <View>
          <HeaderUserInfo />
        </View>
      )}

      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListHeaderComponent={() => (
            <View
              style={{
                height: 478,
                backgroundColor: "yellow",
                position: "relative",
              }}
            >
              <Swiper
                style={styles.swiperWrapper}
                loop={true}
                autoplay={true}
                transitionStyle="fade"
                autoplayTimeout={10}
                showsPagination={false}
              >
                <HomeSlider />

                <View style={styles.slide2}>
                  <Image
                    source={require("../../../../assets/images/homeScreenAdd/slide2_background.png")}
                    style={{
                      opacity: 1,
                      height: "100%",
                      width: "100%",
                      resizeMode: "contain",
                      position: "absolute",
                    }}
                  />
                  <View style={styles.textWraper}>
                    <Text style={styles.text1}>WATCH </Text>
                    <Text style={[styles.text1, styles.text2]}>Now </Text>
                  </View>
                </View>
                <View style={styles.slide3}>
                  <Image
                    source={require("../../../../assets/images/homeScreenAdd/slide3_background.png")}
                    style={{
                      opacity: 1,
                      height: "100%",
                      width: "100%",
                      resizeMode: "contain",
                      position: "absolute",
                    }}
                  />
                  <View style={styles.textWraper}>
                    <Text style={styles.text1}>SLIDE</Text>
                    <Text style={[styles.text1, styles.text2]}> 3</Text>
                  </View>
                </View>
              </Swiper>
              <ProductCardOne
                products={products}
                screenName={"StackHomeScreen"}
              />
              <DealHomeTop />
            </View>
          )}
          ListEmptyComponent={() => <View></View>}
          renderItem={(props) => (
            <View style={{ paddingVertical: 15 }}>
              <Text>{props.item.category}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  swiperWrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    //position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  textWraper: {
    position: "absolute",
    top: 40,
    left: 10,
    flexDirection: "row",
  },
  text1: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 800,
  },
  text2: {
    color: "black",
  },
});

export default HomeStackScreen;
