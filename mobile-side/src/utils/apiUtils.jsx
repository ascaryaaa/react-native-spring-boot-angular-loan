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

// Function to make authorized GET request to User V1 API
export const fetchUserData = async () => {
  try {
    const token = await getToken();
    if (token) {
      const response = await axios.get(Constant.getUsers, {
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
    console.error("Error fetching User data:", error);
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

// Function to make authorized GET request to promo banner API
export const fetchPromoData = async () => {
  try {
    const token = await getToken();
    if (token) {
      const response = await axios.get(Constant.getPromos, {
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
    console.error("Error fetching promo banner data:", error);
    return null;
  }
};
// Function to make authorized GET request to account API by hashed ID
export const fetchAccountData = async (hashedId) => {
    try {
      const token = await getToken();
      if (token) {
        const response = await axios.get(`${Constant.getUserDetailByHashedId}${hashedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data)
        return response.data;
      } else {
        console.error("Token not found in AsyncStorage");
        return null;
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
      return null;
    }
};

export const fetchCabangData = async () => {
  try {
    const token = await getToken();
    if (token) {
      const response = await axios.get(Constant.getCabang, {
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
    console.error("Error fetching cabang data:", error);
    return null;
  }
};
