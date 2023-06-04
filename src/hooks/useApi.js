import AsyncStorage from "@react-native-async-storage/async-storage";

const axios = require("axios").default;

export default function useApi() {
  const baseApiUrl = "https://api.adoptez1artisan.com/";

  axios.defaults.baseURL = baseApiUrl;

  const token = AsyncStorage.getItem("token");
  if (token) {
    console.log(">> TOKEN MEVCUT ", token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axios;
}
