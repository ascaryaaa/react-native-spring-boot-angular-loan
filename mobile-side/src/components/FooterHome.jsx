import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const FooterHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.isi}>
          <Image
            source={require("../../../mobile-side/src/assets/icon_homeHome.png")}
            style={{ width: 32, height: 32 }}
            resizeMode="stretch"
          />
          <Text style={styles.text}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.isi}>
          <Image
            source={require("../../../mobile-side/src/assets/icon_riwayat.png")}
            style={{ width: 32, height: 32 }}
            resizeMode="stretch"
          />
          <Text style={styles.text}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qris}>
          <Image
            source={require("../../../mobile-side/src/assets/icon_qrisLogo.png")}
            style={{ width: 70, height: 70 }}
            resizeMode="stretch"
          />
          <Image
            source={require("../../../mobile-side/src/assets/icon_qrisText.png")}
            style={{ width: 51, height: 19 }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.isi}>
          <Image
            source={require("../../../mobile-side/src/assets/icon_favorit.png")}
            style={{ width: 32, height: 32 }}
            resizeMode="stretch"
          />
          <Text style={styles.text}>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.isi}>
          <Image
            source={require("../../../mobile-side/src/assets/icon_settings.png")}
            style={{ width: 32, height: 32 }}
            resizeMode="stretch"
          />
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
