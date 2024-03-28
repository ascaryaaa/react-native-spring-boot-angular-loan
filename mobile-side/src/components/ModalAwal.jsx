import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "../utils/Constant";
import Close from "./svg/Close";

const { width, height } = Dimensions.get("window");

const ModalAwal = ({ onClose, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleLogin = async () => {
    try {

      const response = await axios.post(Constant.loginAccount, {
        username,
        password,
      });
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
      AsyncStorage.setItem("token", response.data.token);
      AsyncStorage.setItem("hashedId", response.data.hashedId);
      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");
      const hashedId = await AsyncStorage.getItem("hashedId");
      console.log("User:", user);
      console.log("Token:", token);
      console.log("HashedId:", hashedId);
      if (onClose) onClose();
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      setLoginFailed(true);
    }
  };

  const getModalHeight = () => {
    if (loginFailed) {
      return height * 0.65; // Increase height for error message
    }
    return height * 0.53; // Default height
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={onClose}>
            <Close style={styles.iconx}/>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.welcomeText}>
            Selamat datang kembali,
          </Text>
          {loginFailed && (
            <Text style={styles.loginFailedText}>
              Proses login Anda gagal, karena User ID atau MPIN yang Anda
              masukan salah. Silahkan gunakan menu Lupa MPIN/Password dilayar
              login.
            </Text>
          )}
          <Text style={styles.label}>User ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
          />
          <Text style={styles.label}>MPIN</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={true}
            value={password}
          />

          <TouchableOpacity
            onPress={toggleCheckbox}
            style={styles.checkbox}
          >
            <FontAwesome
              name={checked ? "check-square-o" : "square-o"}
              size={24}
              color="black"
            />
            <Text style={styles.checkboxLabel}> Simpan User ID</Text>
          </TouchableOpacity>

          <View style={styles.forgotLinks}>
            <Text style={styles.link}>Lupa User ID</Text>
            <Text style={styles.link}>Lupa MPIN</Text>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
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
  },
  modal: {
    backgroundColor: "white",
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    borderRadius: 10,
    // paddingVertical: ,
  },
  closeButton: {
    width: "100%",
    alignItems: "flex-end"
  },
  form: {
    marginHorizontal: width * 0.025,
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
  },
  welcomeText: {
    fontWeight: "700",
    fontSize: width * 0.05,
    marginBottom: height * 0.015,
  },
  label: {
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
  },
  input: {
    borderBottomWidth: 1.5,
    paddingBottom: height * 0.01,
    marginBottom: height * 0.02,
    borderBottomColor: "#1394AD",
    fontSize: width * 0.04,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  checkboxLabel: {
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
  },
  forgotLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  link: {
    textDecorationLine: "underline",
    fontSize: width * 0.04,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    height: height * 0.06,
  },
  loginButtonText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "500",
  },
  loginFailedText: {
    color: "#D4352A",
    // marginTop: height * 0.01,
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
  },
  iconx: {
    margin: height * 0.015,
  },
});

export default ModalAwal;