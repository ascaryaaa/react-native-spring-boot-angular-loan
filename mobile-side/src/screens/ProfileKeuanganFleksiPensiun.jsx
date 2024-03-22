import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ProfileKeuanganFleksiPensiun = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilanBersih: " ",
    jumlahPinjaman: " ",
    jangkaWaktu: " ",
  });

  const data = [
    {
      id: 1,
      title: "Penghasilan Bersih per Bulan",
      content: "Rp 5.000.000,00",
    },
    { id: 2, title: "Jangka Waktu", content: "120 Bulan" },
    { id: 3, title: "Suku Bunga per Tahun", content: "10,74%" },
    { id: 4, title: "Total Pinjaman", content: "Rp 50.000.000,00" },
    { id: 5, title: "Angsuran Pinjaman per Bulan", content: "Rp 2.167.445,22" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 16 }}>
            Profil Keuangan
          </Text>
          <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
          <TextInput
            style={styles.input}
            placeholder="Penghasilan Bersih per. Bulan"
            value={inputData.penghasilanBersih}
            onChangeText={(number) =>
              setInputData({ ...inputData, penghasilanBersih: number })
            }
          />
          <Text style={styles.text}>Jumlah Pinjaman yang Diajukan</Text>
          <TextInput
            style={styles.input}
            placeholder="Jumlah Pinjaman yang Diajukan"
            value={inputData.jumlahPinjaman}
            onChangeText={(number) =>
              setInputData({ ...inputData, jumlahPinjaman: number })
            }
          />
          <Text style={styles.text}>Jangka Waktu</Text>
          <TextInput
            style={styles.inputJW}
            placeholder="Jangka Waktu"
            value={inputData.jangkaWaktu}
            onChangeText={(number) =>
              setInputData({ ...inputData, jangkaWaktu: number })
            }
          />
          <Text style={{ fontSize: 10, marginBottom: 16 }}>
            *Maksimal 180 Bulan
          </Text>
          <Text style={styles.text}>Bunga Pinjaman</Text>
          <TextInput
            style={styles.input}
            placeholder="10,74%"
            placeholderTextColor="gray"
            keyboardType="numeric"
          />
          <View style={styles.container1}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
              <Text style={styles.textButton}>Simulasi Angsuran</Text>
            </TouchableOpacity>
            {isDropdownOpen && (
              <View style={styles.dropdownContent}>
                <Text style={[styles.text, { marginBottom: 8 }]}>Hasil</Text>
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
                    marginTop: 4,
                    fontSize: 11,
                    // fontWeight: "500",
                  }}
                >
                  *Simulasi menggunakan suku bunga yang berlaku saat ini
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
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileKeuanganFleksiPensiun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 5,
    margin: 5,
    alignSelf: "flex-end",
    marginLeft: 80,
    backgroundColor: "#18C1CD",
    justifyContent: "center",
    borderRadius: 20,
    width: 160,
    height: 44,
    marginTop: 10,
  },
  button1: {
    marginTop: 10,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: "100%",
    height: 44,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  inputJW: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  dropdownContent: {
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    marginTop: 10,
    width: "100%",
    borderWidth: 1,
  },
  textButton: {
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  text: {
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    borderColor: "#000",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
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
    marginBottom: 24,
  },
});
