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

const SimulasiFleksiPensiun = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilan: "",
    jangkaWaktu: "",
  });

  const data =[
    {id: 1, title: "Maksimal Pinjaman", content: "Rp 794.993.871,00"},
    {id: 2, title: "Angsuran Pinjaman per Bulan", content: "Rp 4.554.761,00"}
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hidedButton, setHidedButton] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setHidedButton(true);
  };

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
            <Text style={styles.texttitle}>Simulasi BNI Fleksi Pensiun</Text>
            <Image
              source={require("../../../mobile-side/src/assets/img_simulasi_pensiun.png")}
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
              onChangeText={(number) =>
                setInputData({ ...inputData, jangkaWaktu: number })
              }
              value={setInputData.jangkaWaktu}
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
              placeholder="10.74%"
              placeholderTextColor="gray"
            ></TextInput>
          </View>

          <View style={styles.container1}>
            {!hidedButton && (
              <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
                <Text style={styles.textButton}>Simulasikan</Text>
              </TouchableOpacity>
            )}
            {isDropdownOpen && (
              <View style={styles.dropdownContent}>
                <Text style={styles.text}>Hasil</Text>
                {data.map((view) => (
                <View key={view.id} style={styles.row}>
                  <Text style={{ flex: 1, textAlign: 'left', fontWeight: '300' }}>{view.title}</Text>
                  <Text style={{ flex: 1,textAlign: 'right', fontWeight: '600'}}>{view.content}</Text>
                </View>
                ))}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("ProfileKeuanganFleksiPensiun")}>
                  <Text style={styles.simulasikan}> Selanjutnya</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SimulasiFleksiPensiun;

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
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
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
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    alignSelf: "center",
    paddingTop: 8,
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  dropdownContent: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  text: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    borderColor: '#000',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
});
