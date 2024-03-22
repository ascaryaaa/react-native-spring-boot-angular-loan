import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

const ProfileKeuanganGriya = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    hargaRumah: " ",
    penghasilanBersih: " ",
    jumlahPinjaman: " ",
    jangkaWaktu: " ",
    uangMuka: " ",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hidedButton, setHidedButton] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setHidedButton(true);
  };

  const data = [
    { id: 1, title: "Harga Rumah", content: "Rp 500.000.000,00" },
    { id: 2, title: "Jangka Waktu", content: "120 Bulan" },
    { id: 3, title: "Presentase Uang Muka (%)", content: "10%" },
    { id: 4, title: "Uang Muka", content: "Rp 50.000.000,00" },
    { id: 5, title: "Suku Bunga per Tahun", content: "6,75%" },
    { id: 6, title: "Total Pinjaman", content: "Rp 450.000.000,00" },
    { id: 7, title: "Angsuran Pinjaman per Bulan", content: "Rp 5.167.445,22" },
  ];

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SimulasiGriya")}
          >
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
        <ScrollView>
          <View>
            <Text style={styles.title}>Profile Keuangan</Text>
            <Text style={styles.text}>Harga Rumah</Text>
            <TextInput
              style={styles.input}
              placeholder="Harga Rumah"
              value={inputData.hargaRumah}
              onChangeText={(number) =>
                setInputData({ ...inputData, hargaRumah: number })
              }
            />

            <Text style={styles.text}>Jangka Waktu</Text>
            <TextInput
              style={styles.input2}
              placeholder="Jangka Waktu"
              value={inputData.jangkaWaktu}
              onChangeText={(number) =>
                setInputData({ ...inputData, jangkaWaktu: number })
              }
            />
            <Text style={{ marginBottom: 10, fontSize: 10 }}>
              *Maksimal 360 Bulan
            </Text>
            <Text style={styles.text}>Presentase Uang Muka (%)</Text>
            <TextInput
              style={styles.input}
              placeholder="Presentase Uang Muka"
              value={inputData.uangMuka}
              onChangeText={(number) =>
                setInputData({ ...inputData, uangMuka: number })
              }
            />

            <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
            <TextInput
              style={styles.input}
              placeholder="Bulan"
              value={inputData.penghasilanBersih}
              onChangeText={(number) =>
                setInputData({ ...inputData, penghasilanBersih: number })
              }
            />

            <Text style={styles.text}>Bunga Pinjaman</Text>
            <TextInput
              style={styles.input}
              placeholder="6,75"
              placeholderTextColor="gray"
              keyboardType="numeric"
            />
            <View>
              {!hidedButton && (
                <TouchableOpacity
                  onPress={toggleDropdown}
                  style={styles.button}
                >
                  <Text style={styles.textButton}>Simulasikan</Text>
                </TouchableOpacity>
              )}
              {isDropdownOpen && (
                <View style={styles.show}>
                  <View style={styles.tableShadow}>
                    <View style={styles.dropdownContent}>
                      <Text style={styles.textTable}>Hasil</Text>
                      {data.map((view) => (
                        <View key={view.id} style={styles.row}>
                          <View style={{ width: "60%" }}>
                            <Text
                              style={{
                                flex: 1,
                                textAlign: "left",
                                fontWeight: "300",
                                fontSize: 12,
                              }}
                            >
                              {view.title}
                            </Text>
                          </View>
                          <Text
                            style={{
                              flex: 1,
                              textAlign: "right",
                              fontWeight: "600",
                              fontSize: 12,
                            }}
                          >
                            {view.content}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => navigation.navigate("DataPemohon")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        paddingTop: 12,
                        color: "white",
                        fontWeight: "700",
                        fontSize: 16,
                      }}
                    >
                      Ajukan Pinjaman
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ProfileKeuanganGriya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  bg: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#18C1CD",
    alignSelf: "flex-end",
    width: "40%",
    marginBottom: 16,
    marginTop: 16,
  },
  button1: {
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: "100%",
    height: 44,
  },
  textButton: {
    alignSelf: "center",
    color: "white",
    fontWeight: "800",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  input2: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    // marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  title: {
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 20,
    fontSize: 18,
  },
  text: {
    fontWeight: "700",
    // paddingBottom: 8,
  },
  textTable: {
    fontWeight: "700",
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    // borderColor: "#000",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  dropdownContent: {
    padding: 10,
    marginTop: 10,
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
    shadowRadius: 10,
  },
  show: {
    paddingHorizontal: 4,
    // backgroundColor: "red",
  },
  tableShadow: {
    backgroundColor: "white",
    marginBottom: 16,
    padding: 4,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});
