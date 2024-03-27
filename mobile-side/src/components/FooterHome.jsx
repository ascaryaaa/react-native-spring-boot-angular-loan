import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Beranda from "./svg/Beranda";
import Riwayat from "./svg/Riwayat";
import Favorit from "./svg/Favorit";
import Settings from "./svg/Settings";
import QrisLogo from "./svg/QrisLogo";
import Qris from "./svg/Qris";

const FooterHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.isi}>
         <Beranda></Beranda>
          <Text style={styles.text}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.isi}>
          <Riwayat></Riwayat>
          <Text style={styles.text}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qris}>
          <QrisLogo/>
          <Qris style={{marginTop:4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.isi}>
          <Favorit/>
          <Text style={styles.text}>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.isi}>
          <Settings></Settings>
          <Text style={styles.text}>Pengaturan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#ffff",
    marginTop: 15,
    width: "100%",
    borderTopColor: "#F9A653",
    bottom: 20,
    backgroundColor: "#ffff",
    position: "absolute",
    alignItems: "flex-start", // Horizontally center the content
    justifyContent: "center",
    borderTopWidth: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around", // Adjust as needed
    // paddingVertical: 10, // Adjust as needed
    marginTop: 15,
  },
  isi: {
    alignItems: "center",
    // backgroundColor: "red",
    width: 80,
  },
  qris: {
    alignItems: "center",
    // backgroundColor: "red",
    width: 80,
    top: -48,
  },
  text: {
    fontSize: 12,
  },
});
export default FooterHome;
