import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../mobile-side/src/assets/bg_login.png")}
        style={styles.background}
      />
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DigitalLoan')}> */}
      <View style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("DigitalLoan")}
        >
          Login
        </Text>
      </View>
      {/* </TouchableOpacity> */}
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
    fontWeight: "400",
    backgroundColor: "#18C1CD",
  },
});
