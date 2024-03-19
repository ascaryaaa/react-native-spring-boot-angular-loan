import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  onSelect,
} from "react-native";
import FontLoader from "./FontLoader";

// import FontLoader from "../../FontLoader";

const PengajuanPinjaman = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("DigitalLoan")}>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
          />
        </TouchableOpacity>
        <Text>Digital Loan</Text>
        <Image
          source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        />
      </View>
      <View style={styles.headertxt}>
        <Text style={styles.texttitle}>Pengajuan Pinjaman</Text>
        <Text style={styles.textbody}>
          BNI memiliki berbagai macam produk pinjaman yang dapat disesuaikan
          dengan kebutuhan
        </Text>
      </View>

      <View style={{ padding: 10 }}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SimulasiGriya")}
          >
            <View style={styles.cardContent}>
              <Image
                source={require("../../../mobile-side/src/assets/icon_griya.png")}
                style={styles.productImage}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>BNI Griya</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Image
              source={require("../../../mobile-side/src/assets/icon_fleksi_aktif.png")}
              style={styles.productImage}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>BNI Fleksi Aktif</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SimulasiFleksiAktif")}
            style={styles.selectButton}
          >
            <Text style={styles.selectButtonText}>Pilih</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Image
              source={require("../../../mobile-side/src/assets/icon_fleksi_pensiun.png")}
              style={styles.productImage}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.textJenisPinjaman}>BNI Fleksi Pensiun</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SimulasiFleksiPensiun")}
            style={styles.selectButton}
          >
            <Text style={styles.selectButtonText}>Pilih</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default PengajuanPinjaman;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  button: {
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
    margin: 5,
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
    // backgroundColor:'#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
  },
  headertxt: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  texttitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  textbody: {
    fontSize: 13,
    paddingTop: 10,
    paddingRight: 20,
  },
  jeniscontainer: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 12,
    paddingRight: 17,
    paddingBottom: 10,

    // alignItems: "center",
    // gap: 158.975,
  },
  jenisbody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1394AD",
    borderRadius: 8,
    width: 368,
    height: 64,
    marginLeft: 4,
    marginTop: 14,
  },
  textJenisPinjaman: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
  },
  buttonJenis: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 60,
    height: 26,
  },
  textPilih: {
    color: "#F68310",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
  },
  iconContainerRight: {
    position: "absolute",
    right: 20,
  },
  cardContainer: {
    alignItems: "stretch",
    borderRadius: 8,
    elevation: 10,
    backgroundColor: "#1394AD",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    width: "100%",
    height: "64",
  },
  cardContent: {
    flexDirection: "row", // Ensures image and text are side by side
    gap: 12,
    alignItems: "center", // Align items in center for better visual alignment
  },
  productImage: {
    width: 32,
    height: 32, // Explicit height for consistent sizing
  },
  titleContainer: {
    justifyContent: "center",
  },
  titleText: {
    color: "#FFF",
    fontFamily: "Montserrat-VariableFont_wght",
    fontSize: 12,
    fontWeight: "700",
  },
  selectButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FFF",
    paddingHorizontal: 21,
    paddingVertical: 4,
  },
  selectButtonText: {
    color: "#F68310",
    fontFamily: "Montserrat, sans-serif",
    fontSize: 12,
    fontWeight: "700",
  },
});
