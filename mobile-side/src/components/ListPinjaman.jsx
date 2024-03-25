import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListPinjaman = ({ navigation }) => {

  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item, navigation }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  const listPinjamanData = [
    {
      id: 1,
      img : require("../../../mobile-side/src/assets/img_simulasi_aktif.png"),
      title: "BNI Fleksi Aktif",
      date: "10/03/2024",
      period: "6 Bulan",
      amount: "Rp 100.000.000",
      status: "Diterima",
    },
    {
      id: 2,
      img : require("../../../mobile-side/src/assets/img_simulasi_griya.png"),
      title: "BNI Fleksi Griya",
      date: "10/03/2024",
      period: "6 Bulan",
      amount: "Rp 100.000.000",
      status: "Diterima",
    },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        {listPinjamanData.map(view => (
          <TouchableOpacity onPress={() => navigation.navigate("Monitoring")} key={view.id} style={styles.card}>
            <View style={{width: '35%'}}>
              <Image source={view.img} style={styles.image} />
            </View>
            <View style={{flexDirection: 'column', width: '70%'}}>
              <Text style={styles.textHeader}>{view.title}</Text>
              <Text style={styles.textContent}>Tanggal Pengajuan : {view.date}</Text>
              <Text style={styles.textContent}>Periode Peminjaman : {view.period}</Text>
              <Text style={styles.textContent}>Total Pengajuan : {view.amount}</Text>
              <View style={styles.buttonStatus}>
                <Text style={styles.textStatus}>{view.status}</Text>
              </View>          
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default ListPinjaman;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
    // backgroundColor: 'red',
  },
  card: {
    flexDirection: 'row', 
    padding: 10, 
    borderRadius: 5, 
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  // containerTengah: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 30,
  //   marginLeft: 30,
  //   marginRight: 30,
  //   // backgroundColor: 'blue',
  // },
  // containerBawah: {
  //   // justifyContent: "center",
  //   // alignItems: "center",
  //   marginTop: 30,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   paddingTop: 10,
  // },
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
  // textButton: {
  //   color: 'white',
  //   fontWeight: '600',
  //   fontSize: 14,
  //   textAlign: 'center',
  //   // paddingTop: 10,
  // },
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
    textAlign: 'center'
  },
  buttonStatus : {
    paddingVertical: 3,
    // paddingHorizontal: 16,
    borderRadius: 50,
    width: "35%",
    backgroundColor: "#04C300",
  },
});
