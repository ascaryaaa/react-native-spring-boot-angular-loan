import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListPengajuanPinjaman from "./ListPengajuanPinjaman";
import ListPinjaman from "./ListPinjaman";

const DigitalLoan = ({ navigation }) => {
  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  const [result, setResult] = useState("");

  const listPengajuanPinjamanData = [
    {
      id: 1,
      title: "BNI Griya",
      date: "10/03/2024",
      period: "6 Bulan",
      amount: "Rp 100.000.000",
      status: "Diproses",
    },
  ];
  const listPinjamanData = [
    {
      id: 1,
      title: "BNI Griya",
      date: "10/03/2024",
      period: "6 Bulan",
      amount: "Rp 100.000.000",
      status: "Diterima",
    },
  ];

  const handleAll = () => {
    setResult(
      <View>
        <ListPengajuanPinjaman />
        <ListPinjaman navigation={navigation} />
      </View>
    );
  };

  const handleButton1Press = () => {
    setResult(<ListPengajuanPinjaman />);
  };

  const handleButton2Press = () => {
    setResult(<ListPinjaman />);
  };

  useEffect(() => {
    // handleButton1Press();
    // handleButton2Press();
    handleAll();
    // handle();
  }, []);

  return (
    <View style={styles.container}>
      {/* container atas */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>Digital Loan</Text>
        <Image
          source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        />
      </View>

      {/* container tengah */}
      <ScrollView>
        <View style={styles.containerTengah}>
          <View style={styles.buttonContainer}>
            <View style={{ width: "35%", padding: 5 }}>
              <TouchableOpacity onPress={handleAll} style={styles.button1}>
                <Text style={styles.textButton}>List Semua Pinjaman</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "35%", padding: 5 }}>
              <TouchableOpacity
                onPress={handleButton1Press}
                style={styles.button1}
              >
                <Text style={styles.textButton}>List Pengajuan Pinjaman</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "30%", padding: 5 }}>
              <TouchableOpacity
                onPress={handleButton2Press}
                style={styles.button1}
              >
                <Text style={styles.textButton}>List Pinjaman</Text>
              </TouchableOpacity>
            </View>
          </View>
          {result !== "" && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>{result}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PengajuanPinjaman")}
      >
        <Text style={styles.ajukan}>Ajukan Pinjaman</Text>
      </TouchableOpacity>

      {/* container bawah */}
      <View style={styles.containerBawah}>
        <Text style={styles.kejutan}>Kejutan Bulan ini</Text>
        <ScrollView horizontal={true}>
          <FlatList
            data={list}
            numColumns={2}
            renderItem={renderItem}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};
export default DigitalLoan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 40,
    // backgroundColor: "red",
  },
  containerTengah: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    // marginLeft: 30,
    // marginRight: 30,
    width: "100%",
  },
  containerBawah: {
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    marginBottom: 20,
    // backgroundColor: "red",
  },
  kejutan: {
    fontWeight: "600",
    textAlign: "left",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#18C1CD",
    padding: 5,
    borderRadius: 5,
    margin: 5,
    marginTop: 28,
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
    marginBottom: 20,
  },
  ajukan: {
    color: "white",
    textAlign: "center",
    paddingTop: 5,
    fontWeight: "700",
    fontSize: 16,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    verticalAlign: "top",

    height: 48,
  },
  texttitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 20,
  },
  textbody: {
    fontSize: 13,
    textAlign: "center",
    // backgroundColor: "red",
    // width: "100%",
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

  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    color: "#F68310",
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#F68310",
    borderColor: "#F68310",
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    // backgroundColor:'red'
  },
  resultText: {
    fontSize: 16,
  },
  textButton: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
});
