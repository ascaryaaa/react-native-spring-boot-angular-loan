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

import ListPengajuanPinjaman from "../components/ListPengajuanPinjaman";
import ListPinjaman from "../components/ListPinjaman";

const DigitalLoan = ({ navigation }) => {
  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  const [result, setResult] = useState("");
  const [activeButton, setActiveButton] = useState("all");
  
  const handleAll = () => {
    setResult(
      <View>
        <ListPengajuanPinjaman 
          navigation={navigation}
        />
        <ListPinjaman navigation={navigation} />
      </View>
    );
    setActiveButton("all");
  };

  const handleButton1Press = () => {
    setResult(<ListPengajuanPinjaman />);
    setActiveButton("pengajuan");
  };

  const handleButton2Press = () => {
    setResult(<ListPinjaman />);
    setActiveButton("pinjaman");
  };

  useEffect(() => {
    handleAll();
  }, []); 
  

  return (
    <View style={styles.bg}>
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
                  <Text style={[styles.textButton, activeButton === 'all' && styles.activeButtonText]}>Semua</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "35%", padding: 5 }}>
                <TouchableOpacity
                  onPress={handleButton1Press}
                  style={styles.button1}
                >
                  <Text style={[styles.textButton, activeButton === 'pengajuan' && styles.activeButtonText]}>Pengajuan</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "30%", padding: 5 }}>
                <TouchableOpacity
                  onPress={handleButton2Press}
                  style={styles.button1}
                >
                  <Text style={[styles.textButton, activeButton === 'pinjaman' && styles.activeButtonText]}>Pinjaman</Text>
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
  bg: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  containerTengah: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
    width: "100%",
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
    marginHorizontal: 16,
    color: "#F68310",
  },
  button1: {
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#F68310",
    // backgroundColor: 'yellow',
    height: 40,
    width: 75
  },
  resultContainer: {
    marginTop: 20,
    // padding: 10,
    // borderWidth: 1,
    borderRadius: 5,
    // backgroundColor:'red'
  },
  resultText: {
    fontSize: 16,
  },
  textButton: {
    // color: "white",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
  },
  activeButtonText: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
});
