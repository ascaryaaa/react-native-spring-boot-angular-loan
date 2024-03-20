import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListPengajuanPinjaman = ({ navigation }) => {

  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );
  
  return (
    <View style={styles.container}>
      {/* <Text style={{marginBottom: 10}}>List Pengajuan Pinjaman</Text> */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View style={{width: '30%', marginRight: 5}}>
                <Image 
                source={require("../../../mobile-side/src/assets/img_simulasi_pensiun.png")}
                style={styles.image}/>
            </View>
            <View style={{width: '70%', flexDirection: 'column'}}>
                <Text style={styles.textHeader}>BNI Fleksi Pensiun</Text>
                <Text style={styles.textContent}>Tanggal Pengajuan : 10/03/2024</Text>
                <Text style={styles.textContent}>Periode Peminjaman : 6 Bulan</Text>
                <Text style={styles.textContent}>Total Pengajuan : Rp. 100.000.000</Text>
                <Text style={styles.textContent}>Status : Diproses</Text>
            </View>
        </View>
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
  }
});
