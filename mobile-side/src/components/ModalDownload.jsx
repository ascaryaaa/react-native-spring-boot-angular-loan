import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import DownloadModal from "./svg/DownloadModal";
import Close from "./svg/Close";

const ModalDownload = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={onClose}>
            <Close/>
          </TouchableOpacity>
        </View>
        <View style={styles.isi}>
          <DownloadModal></DownloadModal>
          <Text style={{ fontWeight: "800", paddingTop: 10, fontSize: 16 }}>
            Riwayat Berhasil Didownload !{" "}
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 12, textAlign: "center" }}>
            Silahkan cek di folder download anda.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ModalDownload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor:'red'

    // backgroundColor: "red",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 350,
    height: 300,
    // marginHorizontal: 13,
    borderRadius: 10,
    // backgroundColor: "red",
  },
  isi: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    // marginTop: 32,
  },
  closeButton: {
    alignItems: "flex-end",
    width: "90%",
    // backgroundColor: "red"
  },
});
