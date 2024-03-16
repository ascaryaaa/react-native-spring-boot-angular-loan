// Login.jsx

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import ModalAwal from "../components/ModalAwal";
import { LoginModal } from "./LoginModal";

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("../../../mobile-side/src/assets/bg_login.png")}
      style={styles.background}
    >
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      {/* Modal tetap ditampilkan di dalam View utama */}

      <LoginModal
        visible={modalVisible}
        onClose={closeModal}
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
    backgroundColor: "#18C1CD",
    padding: 5,
    borderRadius: 5,
    margin: 5,
    marginTop: 2,
    marginBottom: 100,
    width: 380,
    height: 50,
    borderRadius: 30,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "500",
  },
});
