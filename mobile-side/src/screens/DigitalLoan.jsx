import React from "react";
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

const DigitalLoan = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    // Replace the current screen with the Login screen in the navigation stack
    navigation.navigate('Login');
  };
  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  return (
    <View style={styles.container}>
      {/* container atas */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleLogout}>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_logout.png")}
          />
        </TouchableOpacity>
        <Text>Digital Loan</Text>
        <Image
          source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        />
      </View>

      {/* container tengah */}
      <View style={styles.containerTengah}>
        <Image
          source={require("../../../mobile-side/src/assets/illu_DL.png")}
          style={styles.amico}
        />
        <Text style={styles.texttitle}>Selamat datang di Digital Loan !</Text>
        <Text style={styles.textbody}>
          Solusi pinjaman berbasis digital untuk mempermudah anda mendapatkan
          produk impian
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PengajuanPinjaman")}
        >
          <Text style={styles.ajukan}>Ajukan Pinjaman</Text>
        </TouchableOpacity>
      </View>

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
    justifyContent: "center",
    alignItems: "center",
    // position: 'absolute',
    marginTop: 280,
  },
  containerTengah: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  containerBawah: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
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
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    verticalAlign: "top",
    paddingLeft: 20,
    paddingRight: 20,
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
});
