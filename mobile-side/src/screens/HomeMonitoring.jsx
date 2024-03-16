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

const HomeMonitoring = ({ navigation }) => {
  const handleLogout = () => {
    AsyncStorage
    .removeItem('token')
    .then(()=>navigation.navigate('Login'))
  };
  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };

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
        <View style={{flexDirection: 'row'}}>
          <View style={styles.container1}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.detailButton}>
              <Text style={styles.textButton}>Semua</Text>
            </TouchableOpacity>
            {isDropdownOpen && (
              <View style={styles.dropdownContent}>
                <Text>hgjvgjgjv</Text>
              </View>
            )}
          </View>

          <View style={styles.container1}>
            <TouchableOpacity onPress={toggleDropdown1} style={styles.detailButton}>
              <Text style={styles.textButton}>Diproses</Text>
            </TouchableOpacity>
            {isDropdownOpen1 && (
              <View style={styles.dropdownContent}>
                <Text>degderhtrh</Text>
              </View>
            )}
          </View>
        </View>
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
export default HomeMonitoring;

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
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
  },
  kejutan: {
    fontWeight: "700",
    fontSize: 14,
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
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownContent: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
});
