import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const modalLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text>Selamat datang kembali,</Text>
      </View>
    </View>
  );
};
export default modalLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 380,
    height: 450,
    marginHorizontal: 13,
    borderRadius: 10,
  },
  button: {
    marginVertical: 20,
    padding: 5,
    margin: 5,
    alignSelf: "center",
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 230,
    height: 44,
  },
});
