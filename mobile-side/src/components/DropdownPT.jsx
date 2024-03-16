import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DropdownPT = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>Pegawai Tetap</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownContent}>
          <Text style={styles.infoText}>This is the dropdown content.</Text>
          <Text style={styles.infoText}>
            It can contain any information you want to display.
          </Text>
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
    backgroundColor: "#18C1CD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  dropdownContent: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
  },
});

export default DropdownPT;
