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
    hargaRumah: "",
    penghasilanBersih: "",
    jangkaWaktu: "",
    uangMuka: "",
  });

  const [inputErrors, setInputErrors] = useState({
    hargaRumah: false,
    jangkaWaktu: false,
    uangMuka: false,
    penghasilanBersih: false,
  });

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
            <Text style={styles.title}>Profil Keuangan</Text>
            <Text style={styles.text}>Harga Rumah</Text>
            <TextInput
              style={[styles.input, inputErrors.hargaRumah && styles.inputError ]}
              keyboardType="numeric"
              value={inputData.hargaRumah}
              onChangeText={(number) =>
                setInputData({ ...inputData, hargaRumah: number })
              }
            />
            {inputErrors.hargaRumah && (
              <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
            )}

            <Text style={styles.text}>Jangka Waktu</Text>
            <TextInput
              style={[styles.input, inputErrors.jangkaWaktu && styles.inputError ]}
              keyboardType="numeric"
              value={inputData.jangkaWaktu}
              onChangeText={(number) =>
                setInputData({ ...inputData, jangkaWaktu: number })
              }
            />
            {inputErrors.jangkaWaktu && (
              <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
            )}
            <Text style={{ marginBottom: 10, fontSize: 10 }}>
              *Maksimal 360 Bulan
            </Text>

            <Text style={styles.text}>Presentase Uang Muka (%)</Text>
            <TextInput
              style={[styles.input, inputErrors.uangMuka && styles.inputError]}
              keyboardType="numeric"
              value={inputData.uangMuka}
              onChangeText={(number) =>
                setInputData({ ...inputData, uangMuka: number })
              }
            />
            {inputErrors.uangMuka && (
              <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
            )}

            <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
            <TextInput
              style={[styles.input, inputErrors.penghasilanBersih && styles.inputError]}
              keyboardType="numeric"
              value={inputData.penghasilanBersih}
              onChangeText={(number) =>
                setInputData({ ...inputData, penghasilanBersih: number })
              }
            />
            {inputErrors.penghasilanBersih && (
              <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
            )}

            <Text style={styles.text}>Bunga Pinjaman</Text>
            <TextInput
              style={styles.input}
              placeholder="6,75"
              placeholderTextColor="gray"
              editable={false}
            />
            <View>
              {!hidedButton && (
                <TouchableOpacity
                  onPress={handleNext}
                  style={styles.button}
                >
                  <Text style={styles.textButton}>Simulasi Angsuran</Text>
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
    marginTop: 8,
    marginBottom: 16,
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
  inputError: {
    borderColor: "red",
    marginBottom: 8,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
});
