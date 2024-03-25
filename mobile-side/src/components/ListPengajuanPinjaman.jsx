import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalDelete from "./ModalDelete";

const ListPengajuanPinjaman = ({ navigation }) => {
  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const [result, setResult] = useState("");

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setDeletedId();
    setModalVisible(true);
  };

  const Data = [
    {
      id: 1,
      img: require("../../../mobile-side/src/assets/img_simulasi_pensiun.png"),
      title: "BNI Fleksi Pensiun",
      date: "10/03/2024",
      period: "6 Bulan",
      amount: "Rp 100.000.000",
      status: "Ditolak",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        {Data.map((view) => (
          <View key={view.id} style={styles.card}>
            <View style={{ width: "35%" }}>
              <Image source={view.img} style={styles.image} />
            </View>
            <View style={{ flexDirection: "column", width: "70%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textHeader}>{view.title}</Text>
                <TouchableOpacity onPress={() => openModal(view.id)}>
                  <Image
                    source={require("../../../mobile-side/src/assets/icon_delete.png")}
                    style={{ justifyContent: "flex-start" }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.textContent}>
                Tanggal Pengajuan : {view.date}
              </Text>
              <Text style={styles.textContent}>
                Periode Peminjaman : {view.period}
              </Text>
              <Text style={styles.textContent}>
                Total Pengajuan : {view.amount}
              </Text>
              <View style={styles.buttonStatus}>
                <Text style={styles.textStatus}>{view.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={closeModal}
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
            // onPress={closeModal}
          >
            {/* ModalAwal tetap berada di dalam View */}
          </Pressable>
          <View>
            <ModalDelete
              navigation={navigation}
              modalVisible={modalVisible}
              closeModal={closeModal}
            ></ModalDelete>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ListPengajuanPinjaman;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
  },
  card: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    // backgroundColor: 'blue'
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  bannerImage: {
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 300,
    height: 110,
    resizeMode: "cover",
  },
  image: {
    width: 95,
    height: 95,
  },
  textHeader: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  textContent: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 4,
  },
  textStatus: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    textAlign:'center'
  },
  buttonStatus: {
    paddingVertical: 3,
    // paddingHorizontal: 16,
    borderRadius: 50,
    width: "35%",
    backgroundColor: "#D4352A",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center", // Pusatkan konten secara horizontal
    // alignItems: "center", // Pusatkan konten secara vertikal
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Atur warna latar belakang
  },
});
