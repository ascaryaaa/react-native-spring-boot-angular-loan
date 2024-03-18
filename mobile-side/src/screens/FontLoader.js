import { useEffect } from "react";
import * as Font from "expo-font";
import { View } from "react-native";

const FontLoader = () => {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"), // Pastikan untuk menyesuaikan path dengan lokasi font Anda
      });
    };

    loadFonts();
  }, []);
  return <View></View>;
};

export default FontLoader;
