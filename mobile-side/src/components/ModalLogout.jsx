import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const ModalLogout = ({ visible, onClose, navigation }) => {
  const handleLogout = () => {
    AsyncStorage.removeItem("token").then(() => navigation.navigate("Login"));
  };
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Image
          source={require("../../../mobile-side/src/assets/illu_logout.png")}
          style={{ width: 160, height: 160 }}
          resizeMode="stretch"
        />
        <Text style={styles.teksYakin}>Apakah anda yakin ?</Text>
        <View style={styles.pilihan}>
          <TouchableOpacity>
            <Text style={styles.cancel} onPress={onClose}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logout}>Log Out</Text>
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
    margin: 32,
    flexDirection: "row",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 302,
    height: 296,
    // marginHorizontal: 13,
    borderRadius: 10,
  },
  teksYakin: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 12,
  },
  pilihan: {
    flexDirection: "row",
  },
  cancel: {
    backgroundColor: "#F0F0F0",
    color: "#9E9E9E",
    width: 95,
    height: 34,
    borderRadius: 20,
    justifyContent: "center", // Mengatur teks secara vertikal ke tengah
    textAlign: "center",
    fontWeight: "700",
    marginRight: 8,
  },
  logout: {
    backgroundColor: "#D4352A",
    color: "#ffff",
    width: 95,
    height: 34,
    borderRadius: 20,
    justifyContent: "center", // Mengatur teks secara vertikal ke tengah
    textAlign: "center",
    fontWeight: "700",
  },
});
export default ModalLogout;
