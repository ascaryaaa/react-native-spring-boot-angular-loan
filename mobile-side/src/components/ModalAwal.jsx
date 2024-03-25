import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "../utils/Constant";

const ModalAwal = ({ onClose, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        Constant.loginAccount,
        {
          username,
          password,
        }
      );
      await AsyncStorage.setItem("user", response.data);
      AsyncStorage.setItem("token", response.data.token);
      AsyncStorage.setItem("hashedId", response.data.hashedId);
      if(onClose) onClose();
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View
          style={{ width: "100%", alignItems: "flex-end", marginRight: 10 }}
        >
          <Image
            source={require("../../../mobile-side/src/assets/icon_x.png")}
            style={styles.iconx}
          />
        </View>

        <View style={styles.form}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>
            Selamat datang kembali,
          </Text>
          <Text style={{ paddingTop: 33 }}>User ID</Text>
          <TextInput
            style={styles.inputform}
            onChangeText={setUsername}
            value={username}
          />
          <Text style={{ paddingTop: 33 }}>MPIN</Text>
          <TextInput
            style={styles.inputform}
            onChangeText={setPassword}
            secureTextEntry={true} // This hides the password input
            value={password}
          />

          <TouchableOpacity
            onPress={toggleCheckbox}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <FontAwesome
              name={checked ? "check-square-o" : "square-o"}
              size={24}
              color="black"
            />
            <Text style={{ marginLeft: 8 }}> Simpan User ID</Text>
          </TouchableOpacity>

          <View style={styles.lupa}>
            <Text style={{ textDecorationLine: "underline" }}>
              Lupa User ID
            </Text>
            <Text style={{ textDecorationLine: "underline" }}>Lupa MPIN</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin} // Updated to use handleLogin
          >
            <Text style={styles.teksLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ModalAwal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    // justifyContent: "center",
    // alignItems: "center",
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
    width: "100%",
    height: 44,
  },
  iconx: {
    height: 13,
    width: 13,
    margin: 12,
  },
  form: {
    margin: 17,
  },
  inputform: {
    borderBottomWidth: 1.5,
    paddingTop: 5,
    borderBottomColor: "#1394AD",
  },
  teksLogin: {
    color: "white",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "500",
    backgroundColor: "#18C1CD",
  },
  lupa: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
