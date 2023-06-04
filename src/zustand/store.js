import React from "react";
import { create } from "zustand";
import { AxiosInstance } from "../utils/constants";
import useApi from "../hooks/useApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = useApi();

const useAmazonStore = create((set, get) => ({
  user: {},
  productsData: [],
  cartData: [],
  categoriesData: [],
  homeNavData: [],
  cartNavData: [],
  isLoading: true,
  userToken: null,

  axiosProducts: async () => {
    try {
      const axiosResponse = await AxiosInstance.get("products");
      set({ productsData: axiosResponse.data });
    } catch (error) {
      console.error("Error axiosProducts:", error);
    }
  },
  axiosCart: async () => {
    try {
      const axiosResponse = await AxiosInstance.get("basket");
      set({ cartData: axiosResponse.data });
    } catch (error) {
      console.error("Error axiosCart:", error);
    }
  },
  deleteCartItem: async (productId) => {
    try {
      const axiosResponse = await AxiosInstance.delete(`basket/${productId}`);
      const { status, data } = axiosResponse;
      if (status === 200) {
        set({ cartData: data });
      }
    } catch (error) {
      console.error("Error axiosCart:", error);
    }
  },
  deleteCdartItem: (productId) => {
    console.log("Delete button is working");
    set((state) => {
      const updatedCart = state.cartData.filter(
        (item) => item.productId !== productId
      );
      return { cartData: updatedCart };
    });
  },
  saveForLatter: () => {
    console.log("Save button is working");
  },
  axiosCategories: async () => {
    try {
      const axiosResponse = await AxiosInstance.get("categoriesNav");
      set({ categoriesData: axiosResponse.data });
    } catch (error) {
      console.error("Error axiosCategories:", error);
    }
  },
  axiosHomeNav: async () => {
    try {
      const axiosResponse = await AxiosInstance.get("homeNav");
      set({ homeNavData: axiosResponse.data });
    } catch (error) {
      console.error("Error axiosHomeNav:", error);
    }
  },
  axiosCartNav: async () => {
    try {
      const axiosResponse = await AxiosInstance.get("cartNav");
      set({ cartNavData: axiosResponse.data });
    } catch (error) {
      console.error("Error axiosCartNav:", error);
    }
  },
  //   login: () => {
  //     set({ userToken: "denemetoken" });
  //     set({ isLoading: false });
  //   },
  //   logout: () => {
  //     set({ userToken: null });
  //     set({ isLoading: false });
  //   },

  setUserToken: (token) => {
    set({ userToken: token });
  },
  login: async (email, password, navigateToProfileScreen) => {
    try {
      const response = await api.post("auth/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        const { token } = response.data.data;

        AsyncStorage.setItem("token", token);

        set({ userToken: token });
        set({ user: { id: 1, name: "Kivanc", address: "London UK" } });

        const savedAsyncStorageToken = await AsyncStorage.getItem("token");
        console.log("User Token from AsyncStorage", savedAsyncStorageToken);
      } else {
        // Alert kullanabilirsin email password yanlis gibi
      }
    } catch (error) {
      console.error("Error login:", error);
    }
  },
  logout: async () => {
    try {
      await AsyncStorage.removeItem("token");
      set({ userToken: null });
    } catch (error) {
      console.error("Error logout:", error);
    }
  },
}));

export default useAmazonStore;

/*
import { create } from "zustand";

const useAmazonStore = create((set,get)=>({
    
}));
*/
