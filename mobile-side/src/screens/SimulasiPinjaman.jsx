import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

const SimulasiPinjaman = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilan: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {/* navbar */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PengajuanPinjaman")}
        >
          <Image
            source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
          />
        </TouchableOpacity>

        <Text>Digital Loan</Text>
        <Image
          source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.texttitle}>Simulasi BNI Griya</Text>
            <Image
              source={require("../../../mobile-side/src/assets/img_simulasi.png")}
              style={styles.imgSimulasi}
            />
            <Text>
              Anda dapat mensimulasikan jenis pinjaman sebelum melakukan
              pengajuan pada halaman ini
            </Text>
          </View>

          <View style={styles.formSimulasi}>
            <Text style={styles.textform}>Penghasilan Bersih per. Bulan</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setInputData({ ...inputData, penghasilan: text })
              }
              value={setInputData.penghasilan}
            ></TextInput>
            <Text style={styles.textform}>Jangka Waktu</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setInputData({ ...inputData, penghasilan: text })
              }
              value={setInputData.penghasilan}
              placeholder="bulan"
              textAlign="right"
            ></TextInput>
            <Text style={styles.textform}>Bunga Pinjaman</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setInputData({ ...inputData, penghasilan: text })
              }
              value={setInputData.penghasilan}
              placeholder="6.75%"
              placeholderTextColor="gray"
            ></TextInput>
          </View>

          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate("DataPemohon")}
          >
            <Text style={styles.simulasikan}> Simulasikan</Text>
          </TouchableOpacity>

          <View style={styles.hasil}>
            <Text style={styles.textform}>Hasil</Text>
            <Text style={{ paddingTop: 5 }}>
              Maksimal Kredit : Rp. 345.000.000{" "}
            </Text>
            <Text style={{ paddingTop: 8 }}>
              Angsuran per Bulan : Rp. 4.000.000
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ProfileKeuanganGriya")}
            >
              <Text style={styles.simulasikan}> Selanjutnya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SimulasiPinjaman;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  button: {
    padding: 5,
    margin: 5,
    alignSelf: "flex-end",
    marginLeft: 80,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 130,
    height: 44,
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
  },
  bodyContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  imgSimulasi: {
    width: 228,
    height: 228,
    marginTop: 16,
    marginBottom: 16,
  },
  simulasikan: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
    paddingTop: 6,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    // width: 358,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  formSimulasi: {
    paddingTop: 40,
  },
  textform: {
    fontWeight: "800",
  },
});
