import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LogoBNIKotak from "./svg/LogoBNIKotak"

const ModalLogout = ({ visible, onClose, navigation }) => {
  const handleLogout = () => {
    AsyncStorage.removeItem("token").then(() => navigation.navigate("Login"));
  };
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <LogoBNIKotak></LogoBNIKotak>
        <Text style={styles.teksYakin}>Apakah anda yakin ?</Text>
        <View style={styles.pilihan}>
          <TouchableOpacity style={styles.cancel} onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <Text style={{width: 10}}></Text>
          <TouchableOpacity style={styles.logout} onPress={handleLogout}>
            <Text style={{ color: "#ffff" }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "red"
  },
  modal: {
    justifyContent: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 4,
    padding: 20,
    gap: 6,
    width: "90%"
  },
  teksYakin: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 12,
  },
  pilihan: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cancel: {
    display: "flex",
    // width: "40%",
    padding: 42,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#F2F4F8",
  },
  logout: {
    display: "flex",
    // width: "40%",
    padding: 42,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#F68310",
  },
});
export default ModalLogout;
