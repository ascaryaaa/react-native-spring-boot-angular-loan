import { Modal, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalLogout from "./ModalLogout";
import { useEffect, useState } from "react";

export function LogoutModal({ visible, onClose, navigation }) {
  //   const navigation = useNavigation();

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        {/* Pressable di luar modal */}
        <Pressable
          style={{
            flex: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onPress={onClose}
        >
          {/* ModalAwal tetap berada di dalam View */}
        </Pressable>
        <View style={styles.button}>
          <ModalLogout navigation={navigation}></ModalLogout>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },

  button: {
    flex: 1,
    justifyContent: "center",
  },
});
