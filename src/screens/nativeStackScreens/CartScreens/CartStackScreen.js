import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import Input from "../../../components/input";
import { Colors } from "../../../utils/constants";
import Navbar from "../../../components/navbar";
import useAmazonStore from "../../../zustand/store";
import LinearGradient from "react-native-linear-gradient";
import HeaderUserInfo from "../../../components/headerUserInfo";
import ProductCardCart from "../../../components/productCards/ProductCardCart";
import EmptyCardCart from "../../../components/productCards/EmptyCardCart";
//import AnimatedLottie from "../../../components/animatedLotties";

const CartStackScreen = () => {
  const user = useAmazonStore((state) => state.user);
  const cart = useAmazonStore((state) => state.cartData);
  const axiosCart = useAmazonStore((state) => state.axiosCart);
  const deleteCartItem = useAmazonStore((state) => state.deleteCartItem);
  const saveForLatter = useAmazonStore((state) => state.saveForLatter);
  //console.log("CartSayfa", cart);

  useEffect(() => {
    axiosCart();
  }, []);
  useEffect(() => {
    axiosCart();
  }, [cart]);

  //   if (cart === null) {
  //     <View>
  //       <AnimatedLottie lattieName="loading" autoPlay="true" loop="true" />
  //     </View>;
  //   }

  const _renderItems = ({ item }) => (
    <View>
      <ProductCardCart
        sourceImage={{ uri: item?.thumbnail }}
        productTitle={item?.title}
        productStock={item?.stock}
        productBrand={item?.brand}
        discountPercentage={item?.discountPercentage}
        price={item?.price}
        productId={item?.id}
        screenName={"StackCartScreen"}
        deleteCartItem={deleteCartItem}
        saveForLatter={saveForLatter}
      />
    </View>
  );
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
        <Navbar stateName={"cartNav"} getStateFunctionName={"axiosCartNav"} />
      </View>
      {user.name && (
        <View>
          <HeaderUserInfo />
        </View>
      )}
      {cart && cart?.length > 0 ? (
        <FlatList data={cart} renderItem={_renderItems} />
      ) : (
        <View>
          <EmptyCardCart />
        </View>
      )}
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
});

export default CartStackScreen;
