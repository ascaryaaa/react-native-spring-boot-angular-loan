import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { DownloadModal } from "../components/DownloadModal";

const transactionHistory = [
  {
    id: 1,
    date: "25 Maret 2024",
    time: "00.01 WIB",
    title: "Auto Grab Fund",
    amount: "-Rp. 540.669,55",
  },
  {
    id: 2,
    date: "22 Maret 2024",
    time: "03.59 WIB",
    title: "6643847934636TF",
    amount: "-Rp. 1.556.889,99",
  },
  {
    id: 3,
    date: "25 Februari 2024",
    time: "00.01 WIB",
    title: "Auto Grab Fund",
    amount: "-Rp 1.556.882,98",
  },
];

const Riwayat = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Digital Loan</Text>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 5, marginTop:8 }}>
          Riwayat
        </Text>
        {transactionHistory.map((view) => (
          <View key={view.id}>
            <View
              style={{
                top: 10,
                width: "100%",
                backgroundColor: "#F68310",
                padding: 8,
                borderRadius: 4,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
                {view.date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                top: 10,
                padding: 8,
                justifyContent: "space-between",
              }}
            >
              <View style={styles.row}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  {view.title}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "400" }}>
                  {view.time}
                </Text>
              </View>
              <Text style={{ fontSize: 12, fontWeight: "700" }}>
                {view.amount}
              </Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonDownload} onPress={openModal}>
            Download Riwayat
          </Text>
        </TouchableOpacity>
        <DownloadModal
          visible={modalVisible}
          onClose={closeModal}
          navigation={navigation}
        ></DownloadModal>
      </View>
    </View>
  );
};
export default Riwayat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
    // backgroundColor: "pink",
  },
  table: {
    top: 8,
    padding: 15,
    borderColor: "#000",
    marginBottom: 10,
  },
  row: {
    flexDirection: "column",
    borderColor: "#000",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  button: {
    marginTop: 20,
    marginBottom: 56,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    height: 44,
    width: "100%",
  },
  bg: {
    backgroundColor: "white",
    height: "100%",
    // width: "100%",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    verticalAlign: "top",
    paddingTop: 60,
    padding: 12,
    backgroundColor: "#FFF",
    // marginBottom: 24,
    // backgroundColor: "red"
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
  },
  buttonDownload: {
    textAlign: "center",
    paddingTop: 12,
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
