import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ProfileKeuanganFleksiAktif = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilanBersih: "",
    jumlahPinjaman: "",
    jangkaWaktu: "",
  });

  const [inputErrors, setInputErrors] = useState({
    penghasilanBersih: false,
    jumlahPinjaman: false,
    jangkaWaktu: false,
  });
  const data = [
    {
      id: 1,
      title: "Penghasilan Bersih per Bulan",
      content: "Rp 8.000.000,00",
    },
    { id: 2, title: "Jangka Waktu", content: "120 Bulan" },
    { id: 3, title: "Suku Bunga per Tahun", content: "12,75%" },
    { id: 4, title: "Total Pinjaman", content: "Rp 100.000.000,00" },
    { id: 5, title: "Angsuran Pinjaman per Bulan", content: "Rp 3.167.445,22" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hidedButton, setHidedButton] = useState(false);

  const validateInputs = () => {
    const errors = {};
    let isValid = true;
    for (const key in inputData) {
      if (!inputData[key]) {
        errors[key] = true;
        isValid = false;
      }
    }
    setInputErrors(errors);
    return isValid;
  };

  const handleNext = () => {
    if (validateInputs()) {
      toggleDropdown();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setHidedButton(true);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
      {/* container atas */}
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Profil Keuangan</Text>
            <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
            <TextInput
              style={[
                styles.input,
                inputErrors.penghasilanBersih && styles.inputError,
              ]}
              // placeholder="Penghasilan Bersih per. Bulan"
              keyboardType="numeric"
              value={inputData.penghasilanBersih}
              onChangeText={(number) =>
                setInputData({ ...inputData, penghasilanBersih: number })
              }
            />
            {inputErrors.penghasilanBersih && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}

            <Text style={styles.text}>Jumlah Pinjaman yang Diajukan</Text>
            <TextInput
              style={[
                styles.input,
                inputErrors.jumlahPinjaman && styles.inputError,
              ]}
              // placeholder="Jumlah Pinjaman yang Diajukan"
              value={inputData.jumlahPinjaman}
              keyboardType="numeric"
              onChangeText={(number) =>
                setInputData({ ...inputData, jumlahPinjaman: number })
              }
            />
            {inputErrors.jumlahPinjaman && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}

            <Text style={styles.text}>Jangka Waktu</Text>
            <TextInput
              style={[
                styles.input,
                inputErrors.jangkaWaktu && styles.inputError,
              ]}
              // placeholder="Jangka Waktu"
              value={inputData.jangkaWaktu}
              keyboardType="numeric"
              onChangeText={(number) =>
                setInputData({ ...inputData, jangkaWaktu: number })
              }
            />
            {inputErrors.jangkaWaktu && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}
            <Text style={{ marginBottom: 10, fontSize: 10 }}>
              *Maksimal 360 Bulan
            </Text>
            <Text style={styles.text}>Bunga Pinjaman</Text>
            <TextInput
              style={styles.input}
              placeholder="Persediaan Per Tahun"
              editable={false}
              value="12,75%"
            />
            <View>
              {!hidedButton && (
                <TouchableOpacity onPress={handleNext} style={styles.button}>
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
                              fontSize: 14,
                            }}
                          >
                            {view.content}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontWeight: "500",
                      fontSize: 12,
                    }}
                  >
                    *Simulasi menggunakan suku bunga yang berlaku saat ini
                  </Text>
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

export default ProfileKeuanganFleksiAktif;

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
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  button1: {
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: "100%",
    height: 44,
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
    // marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 16,
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
  dropdownContent: {
    padding: 10,
    marginTop: 10,
    width: "100%",
  },
  textButton: {
    alignSelf: "center",
    color: "white",
    fontWeight: "800",
  },
  text: {
    fontWeight: "700",
  },
  textTable: {
    fontWeight: "700",
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-around",
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  inputError: {
    borderColor: "red",
    marginBottom: 8,
  },
});
