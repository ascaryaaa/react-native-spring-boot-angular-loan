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
import ModalDelete from "../components/ModalDelete";

const ListPengajuanPinjaman = ({ navigation }) => {

  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };
  
  return (
    <View style={styles.container}>
      {/* <Text style={{marginBottom: 10}}>List Pengajuan Pinjaman</Text> */}
      {/* <TouchableOpacity onPress={openModal}> */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View style={{width: '30%', marginRight: 5}}>
              <Image 
              source={require("../../../mobile-side/src/assets/img_simulasi_pensiun.png")}
              style={styles.image}/>
          </View>
          <View style={{width: '70%', flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textHeader}>BNI Fleksi Pensiun</Text>
              <TouchableOpacity onPress={openModal}>
              <Image 
              source={require("../../../mobile-side/src/assets/icon_delete.png")}/>              
              </TouchableOpacity>
            </View>
            <Text style={styles.textContent}>Tanggal Pengajuan : 10/03/2024</Text>
            <Text style={styles.textContent}>Periode Peminjaman : 6 Bulan</Text>
            <Text style={styles.textContent}>Total Pengajuan : Rp. 100.000.000</Text>
            <Text style={styles.textContent}>Status : Ditolak</Text>
          </View>
        </View>
      {/* </TouchableOpacity> */}

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
    paddingTop: 18,
    paddingHorizontal: 18,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center", // Pusatkan konten secara horizontal
    // alignItems: "center", // Pusatkan konten secara vertikal
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Atur warna latar belakang
  },
});
