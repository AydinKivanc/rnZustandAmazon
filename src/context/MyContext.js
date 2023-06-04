import React, { createContext, useEffect, useState, useContext } from "react";
import { AxiosInstance } from "../utils/constants";
import { Text } from "react-native";

const MainContext = createContext({
  products: [],
  categories: [],
  homeNav: [],
  axiosProducts: async () => {},
  axiosCategories: async () => {},
  axiosHomeNav: async () => {},
  setProducts: () => {},
});

const MainContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [homeNav, setHomeNav] = useState([]);

  const axiosProducts = async () => {
    const axiosResponse = await AxiosInstance.get("products");
    //console.log('Response', axiosResponse.data);
    setProducts(axiosResponse.data);
  };

  const axiosCategories = async () => {
    const axiosResponse = await AxiosInstance.get("categories");
    //console.log('Response', axiosResponse.data);
    setCategories(axiosResponse.data);
  };

  const axiosHomeNav = async () => {
    const axiosResponse = await AxiosInstance.get("homeNav");
    //console.log('Response', axiosResponse.data);
    setHomeNav(axiosResponse.data);
  };

  return (
    <MainContext.Provider
      value={{
        products,
        setProducts,
        axiosProducts,
        categories,
        axiosCategories,
        homeNav,
        axiosHomeNav,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { useContext, MainContext, MainContextProvider };

/*
! Sayfalarda cagirirken
import { MainContext } from "../../context/MyContext";
!Verilerin kullanimi icin
  const { products, axiosProducts, setProducts } = useContext(MainContext);

  
  return (
        <View>
        <FlatList
          data={products}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListHeaderComponent={() => (
            <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  justifyContent: "center",
                }}
              >
                <Button title="Load" onPress={() => axiosProducts()} />
                <Button title="Delete" onPress={() => setProducts([])} />
              </View>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={{ paddingVertical: 15 }}>
              <Text>{item.category}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        </View>
*/
