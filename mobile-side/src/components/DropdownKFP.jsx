import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import InfoKFP from "./InfoKFP";

const DropdownKFP = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>Informasi Produk dan Biaya Fleksi Pensiun</Text>
        <Image
          source={require("../../../mobile-side/src/assets/icon_arrowDown.png")}
          style={{ marginTop: 4 }}
        />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownContent}>
          <InfoKFP />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
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
    padding: 5,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 18,
  },
});

export default DropdownKFP;
