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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PengajuanPinjaman")}
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
      <ScrollView>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>
            Profile Keuangan
          </Text>
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
            style={styles.input}
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
          <View style={styles.container1}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
              <Text style={styles.textButton}>Simulasi Angsuran</Text>
            </TouchableOpacity>
            {isDropdownOpen && (
              <View style={[styles.dropdownContent, { borderRadius: 7 }]}>
                <Text style={{ marginBottom: 8, fontWeight: "700" }}>
                  Hasil
                </Text>
                {data.map((view) => (
                  <View key={view.id} style={styles.row}>
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
                <Text
                  style={{
                    fontWeight: "300",
                    marginVertical: 20,
                    fontSize: 11,
                    // fontWeight: "500",
                  }}
                >
                  Bunga Dapat Berubah Sewaktu-waktu Tanpa Pemberitahuan Lebih
                  Lanjut
                </Text>
              </View>
            )}
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
      </ScrollView>
    </View>
  );
};
export default ProfileKeuanganGriya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 40,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 5,
    margin: 5,
    alignSelf: "flex-end",
    marginLeft: 80,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 160,
    height: 44,
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
    paddingTop: 8,
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 8,
    // marginBottom: 24,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  text: {
    fontWeight: "700",
    marginTop: 24,
    // fontSize: 14,
  },
  row: {
    flexDirection: "row",
    borderColor: "#000",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  dropdownContent: {
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    marginTop: 10,
    width: "100%",
    borderWidth: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    verticalAlign: "top",
    marginBottom: 24,
    height: 48,
  },
});
