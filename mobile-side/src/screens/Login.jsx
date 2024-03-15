import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Modal,
  Pressable,
} from "react-native";
import ModalAwal from "../components/ModalAwal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {

  useEffect(() => {
    AsyncStorage
    .getItem('token')
    .then(token => {
        if (token !== null) {
            navigation.navigate('DigitalLoan')
        }
    })
  }, [])

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../mobile-side/src/assets/bg_login.png")}
        style={styles.background}
      />
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal} // Close the modal when the back button is pressed on Android or when tapping outside the modal on iOS
      >
        <Pressable style={styles.modalContainer} onPress={closeModal}>
          <View style={styles.button}>
            <ModalAwal navigation={navigation} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
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
    backgroundColor: "#18C1CD",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
