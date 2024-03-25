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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      img : require("../../../mobile-side/src/assets/img_simulasi_pensiun.png"),
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
        {Data.map(view => (
          <View key={view.id} style={{flexDirection: 'row', marginBottom: 10, padding: 10, borderRadius: 5, backgroundColor: 'white' }}>
            <View style={{ width: '30%', marginRight: 5}}>
              <Image source={view.img} style={styles.image} />
            </View>
            <View style={{flexDirection: 'column', width: '70%'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textHeader}>{view.title}</Text>
                <TouchableOpacity onPress={() => openModal(view.id)}>
                  <Image 
                  source={require("../../../mobile-side/src/assets/icon_delete.png")}/>              
                </TouchableOpacity>
              </View>
              <Text style={styles.textContent}>Tanggal Pengajuan : {view.date}</Text>
              <Text style={styles.textContent}>Periode Peminjaman : {view.period}</Text>
              <Text style={styles.textContent}>Total Pengajuan : {view.amount}</Text>
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
    // paddingTop: 18,
    paddingHorizontal: 10,
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
    // backgroundColor: 'pink',

  },
  containerTengah: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'red',
  },
  containerBawah: {
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
  },
  kejutan: {
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  button: {
    backgroundColor: "#18C1CD",
    padding: 5,
    borderRadius: 5,
    margin: 5,
    marginTop: 10,
    width: 350,
    height: 45,
    borderRadius: 20,
  },
  amico: {
    padding: 5,
    borderRadius: 5,
    margin: 5,
    height: 173,
    width: 175,
  },
  ajukan: {
    color: "white",
    textAlign: "center",
    paddingTop: 5,
    fontWeight: "700",
  },
  texttitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 20,
  },
  textbody: {
    fontSize: 13,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 25,
  },
  bannerImage: {
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 300,
    height: 110,
    resizeMode: "cover",
  },
  bannerText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background over image
    padding: 5,
  },
  detailButton: {
    marginTop: 15,
    marginBottom: 8,
    backgroundColor:'#F68310',
    borderRadius: 50,
    borderColor: '#F68310',
    width: 70,
    height: 40,
  },
  textButton: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
  },
  image: {
    width: 95,
    height: 95,
  },
  textHeader: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  textContent: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 4,
  },
  textStatus: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    textAlign:'center'
  },
  buttonStatus : {
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "#D4352A",
    borderColor: "#D4352A",
    width: '30%'
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center", // Pusatkan konten secara horizontal
    // alignItems: "center", // Pusatkan konten secara vertikal
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Atur warna latar belakang
  },
});
