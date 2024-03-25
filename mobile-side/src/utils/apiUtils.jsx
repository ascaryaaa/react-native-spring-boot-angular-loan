import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constant from "../utils/Constant";

// Function to retrieve token from AsyncStorage
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Error retrieving token from AsyncStorage:", error);
    return null;
  }
};

// Function to make authorized GET request to jenis pinjaman API
export const fetchJenisPinjamanData = async () => {
  try {
    const token = await getToken();
    if (token) {
      const response = await axios.get(Constant.getJenisPinjamans, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } else {
      console.error("Token not found in AsyncStorage");
      return null;
    }
  } catch (error) {
    console.error("Error fetching jenis pinjaman data:", error);
    return null;
  }
};