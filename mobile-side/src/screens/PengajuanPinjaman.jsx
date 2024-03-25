import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getJenisPinjamans } from "../reducers/JenisPinjaman";

const PengajuanPinjaman = ({ navigation }) => {
  const jenisPinjamanState = useSelector((state) => state.jenisPinjaman);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchInfo();
    dispatch(getJenisPinjamans());
  }, [dispatch]);

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("DigitalLoan")}>
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

      <View style={styles.container}>
        <View style={styles.headertxt}>
          <Text style={styles.texttitle}>Pengajuan Pinjaman</Text>
          <Text style={styles.textbody}>
            BNI memiliki berbagai macam produk pinjaman yang dapat disesuaikan
            dengan kebutuhan
          </Text>
        </View>

        <View style={styles.row}>
          {jenisPinjamanState.loading ? (
            <ActivityIndicator />
          ) : (
            jenisPinjamanState?.data?.map((jenisPinjaman, index) => {
              // Menghilangkan underscore dari nameJenisPinjaman
              const formattedName = jenisPinjaman.nameJenisPinjaman.replace(
                /_/g,
                " "
              );

              return (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() => {
                    // Menentukan navigasi berdasarkan index atau jenisPinjaman tertentu
                    switch (index) {
                      case 0:
                        navigation.navigate("SimulasiGriya");
                        break;
                      case 1:
                        navigation.navigate("SimulasiFleksiAktif");
                        break;
                      case 2:
                        navigation.navigate("SimulasiFleksiPensiun");
                        break;
                      default:
                        break;
                    }
                  }}
                  key={index} // Pastikan setiap TouchableOpacity memiliki key yang unik
                >
                  <Image
                    source={{ uri: jenisPinjaman.iconJenisPinjaman }}
                    style={styles.productImage}
                  />
                  <Text style={styles.textJenisPinjaman}>{formattedName}</Text>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
    </View>
  );
};
export default PengajuanPinjaman;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    // backgroundColor: "red"
  },
  bg: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    verticalAlign: "top",
    // height: 48,
    paddingTop: 60,
    padding: 12,
    width: "100%",
    backgroundColor: "#FFF",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  headertxt: {
    marginTop: 24,
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
  },
  textJenisPinjaman: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    // fontFamily: "Montserrat-Regular",
    marginLeft: 12,
  },
  buttonJenis: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 60,
    height: 26,
  },
  iconContainerRight: {
    position: "absolute",
    right: 20,
  },
  cardContainer: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#1394AD",
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 8,
    width: "100%",
    height: 64,
  },
  cardContent: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  productImage: {
    width: 39,
    height: 39,
    marginLeft: 8,
  },
  titleContainer: {
    justifyContent: "center",
  },
  titleText: {
    color: "#FFF",
    // fontFamily: "Montserrat-VariableFont_wght",
    fontSize: 14,
    fontWeight: "700",
    // backgroundColor: "red",
    textAlign: "left",
    marginLeft: 20,
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
  row: {
    flexWrap: "wrap",
    alignItems: "center",
    // backgroundColor: "green",
  },
  image: {
    width: 115,
    height: 160,
    alignSelf: "flex-Start",
  },
});
