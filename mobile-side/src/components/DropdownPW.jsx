import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import InfoPT from "./InfoPT";
import InfoPro from "./InfoPro";
import InfoPW from "./InfoPW";

const DropdownPW = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>Pengusaha/Wiraswasta</Text>
        <Image
          source={require("../../../mobile-side/src/assets/icon_arrowDown.png")}
          style={{ marginTop: 4 }}
        />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownContent}>
          <InfoPW />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F68310",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
    width: "100%",
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  dropdownContent: {
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 18,
  },
});

export default DropdownPW;
