import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginModal } from "./LoginModal";

const Login = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (token !== null) {
        // navigation.navigate("DigitalLoan");
        navigation.navigate("Home");
      }
    });
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSuccessfulLogin = () => {
    setModalVisible(false); // Close modal
    navigation.navigate("Home"); // Navigate to home
  };

  return (
    <ImageBackground
      source={require("../../../mobile-side/src/assets/bg_login.png")}
      style={styles.background}
    >
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <View style={styles.rowFitur}>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_transfer.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Transfer</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/menu_qris.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Transfer</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/menu_lain.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Transfer</Text>
        </View>
      </View>

      {/* Modal tetap ditampilkan di dalam View utama */}
      <LoginModal
        visible={modalVisible}
        onClose={closeModal}
        onLoginSuccess={handleSuccessfulLogin}
        navigation={navigation}
      />
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    width: 360,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 24,
    backgroundColor: "#18C1CD",
    marginBottom : 28
  },
  text: {
    color: "white",
    fontSize: 19,
    fontWeight: "500",
  },
  rowFitur: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "60%",
  },
  features: {
    alignItems: "center"
  }
});
