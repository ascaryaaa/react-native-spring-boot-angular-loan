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
        <ListPengajuanPinjaman navigation={navigation} />
        <ListPinjaman navigation={navigation} />
      </View>
    );
    setActiveButton("all");
  };
  
  const handleButton1Press = () => {
    setResult(
      <View>
        <ListPengajuanPinjaman navigation={navigation} />
      </View>
    );
    setActiveButton("pengajuan");
  };
  
  const handleButton2Press = () => {
    setResult(
      <View>
        <ListPinjaman navigation={navigation} />
      </View>
    );
    setActiveButton("pinjaman");
  };

  useEffect(() => {
    handleAll();
  }, []);

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
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
      </View>
      {/* container tengah */}
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity
              onPress={handleAll}
              style={[activeButton === "all" && styles.activeButtonText]}
            >
              <Text
                style={[
                  styles.textButton,
                  activeButton === "all" && styles.activeButtonText,
                ]}
              >
                Semua
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleButton1Press}
              style={[activeButton === "pengajuan" && styles.activeButtonText]}
            >
              <Text
                style={[
                  styles.textButton,
                  activeButton === "pengajuan" && styles.activeButtonText,
                ]}
              >
                Pengajuan
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleButton2Press}
              style={[activeButton === "pinjaman" && styles.activeButtonText]}
            >
              <Text
                style={[
                  styles.textButton,
                  activeButton === "pinjaman" && styles.activeButtonText,
                ]}
              >
                Pinjaman
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerTengah}>
          <ScrollView>
            {result !== "" && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{result}</Text>
              </View>
            )}
          </ScrollView>
        </View>

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
    paddingHorizontal: 16,
  },
  bg: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  containerTengah: {
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    backgroundColor: "red",
  },
  containerBawah: {
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "red",
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
    verticalAlign: "top",
    paddingTop: 60,
    padding: 12,
    width: "100%",
    backgroundColor: "#FFF",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    backgroundColor: "grey",
  },
  resultContainer: {
    marginTop: 16,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
  },
  textButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "left",
    width: "100%",
    fontSize: 14,
    fontWeight: "400",
  },
  activeButtonText: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "#F68310",
  },
});
