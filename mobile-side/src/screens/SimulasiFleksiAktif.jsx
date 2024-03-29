import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { getJenisPinjamans } from "../reducers/JenisPinjaman";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackNavbar from "../components/svg/BackNavbar";
import HomeNavbar from "../components/svg/HomeNavbar";

const SimulasiFleksiAktif = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilan: "",
    jangkaWaktu: "",
  });

  const [inputErrors, setInputErrors] = useState({
    penghasilan: false,
    jangkaWaktu: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hidedButton, setHidedButton] = useState(false);

  const jenisPinjamanState = useSelector((state) => state.jenisPinjaman);
  const dispatch = useDispatch();

  const idToDisplay = 2;

  const maksAngsuran = inputData.penghasilan / 2;
  const maksPinjaman =
    (maksAngsuran * (1 - Math.pow(1 + 0.1275 / 12, -inputData.jangkaWaktu))) /
    (0.1275 / 12);

  const data = [
    {
      id: 1,
      title: "Maksimal Pinjaman",
      content: `Rp ${maksPinjaman.toLocaleString("id-ID", {
        maximumFractionDigits: 2,
      })}`,
    },
    {
      id: 2,
      title: "Maksimal Angsuran",
      content: `Rp ${maksAngsuran.toLocaleString("id-ID", {
        maximumFractionDigits: 2,
      })}`,
    },
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setHidedButton(true);
  };

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

  const taruhData = async () => {
    if (validateInputs()) {
      try {
        // Stringify and save inputData to AsyncStorage
        await AsyncStorage.setItem("penghasilan", inputData.penghasilan);
        AsyncStorage.setItem("jangkaWaktu", inputData.jangkaWaktu);
        AsyncStorage.setItem("simulasiPinjaman", JSON.stringify(maksPinjaman));

        //AsyncStorage.setItem('max', inputData.jangkaWaktu X inputData.penghasilan); gpt help me
        // Retrieve and log the saved item
        const savedData = await AsyncStorage.getItem("penghasilan");
        console.log(JSON.parse(savedData)); // Make sure to parse the JSON string
        const savedData2 = await AsyncStorage.getItem("jangkaWaktu");
        console.log(JSON.parse(savedData2)); // Make sure to parse the JSON string
        const savedData3 = await AsyncStorage.getItem("simulasiPinjaman");
        console.log(JSON.parse(savedData3));
        navigation.navigate("ProfileKeuanganFleksiAktif");
      } catch (error) {
        console.error(
          "Failed to save or retrieve the data from AsyncStorage",
          error
        );
      }
    }
  };

  useEffect(() => {
    // fetchInfo();
    dispatch(getJenisPinjamans());
  }, [dispatch]);
  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          {/* navbar */}
          <TouchableOpacity
            onPress={() => navigation.navigate("PengajuanPinjaman")}
          >
            <BackNavbar></BackNavbar>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Digital Loan</Text>
          <HomeNavbar></HomeNavbar>
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.bodyContainer}>
            <View>
              <Text style={styles.texttitle}>Simulasi BNI Fleksi Aktif</Text>
              <View style={styles.centerred}>
                <View>
                  {jenisPinjamanState.loading ? (
                    <ActivityIndicator />
                  ) : (
                    jenisPinjamanState?.data
                      // Filter data berdasarkan idJenisPinjaman
                      .filter(
                        (jenisPinjaman) =>
                          jenisPinjaman.idJenisPinjaman === idToDisplay
                      )
                      .map((jenisPinjaman, index) => (
                        <Image
                          style={styles.imgSimulasi}
                          source={{ uri: jenisPinjaman.gambarJenisPinjaman }}
                        />
                      ))
                  )}
                </View>
              </View>
              <Text>
                Anda dapat mensimulasikan jenis pinjaman sebelum melakukan
                pengajuan pada halaman ini
              </Text>
            </View>

            <View style={styles.formSimulasi}>
              <Text style={styles.textform}>Penghasilan Bersih per. Bulan</Text>
              <TextInput
                style={[
                  styles.input,
                  inputErrors.penghasilan && styles.inputError,
                ]}
                keyboardType="numeric"
                placeholder="Rp"
                onChangeText={(number) =>
                  setInputData({ ...inputData, penghasilan: number })
                }
                value={inputData.penghasilan}
              />
              {inputErrors.penghasilan && (
                <Text style={styles.errorText}>
                  Mohon isikan data dengan benar
                </Text>
              )}

              <Text style={styles.textform}>Jangka Waktu</Text>
              <TextInput
                style={[
                  styles.input,
                  inputErrors.jangkaWaktu && styles.inputError,
                ]}
                keyboardType="numeric"
                onChangeText={(number) =>
                  setInputData({ ...inputData, jangkaWaktu: number })
                }
                value={setInputData.jangkaWaktu}
                placeholder="bulan"
                // textAlign="right"
              ></TextInput>
              {inputErrors.jangkaWaktu && (
                <Text style={styles.errorText}>
                  Mohon isikan data dengan benar
                </Text>
              )}
              <Text style={styles.textform}>Bunga Pinjaman</Text>
              <TextInput
                style={styles.inputFill}
                onChangeText={(text) =>
                  setInputData({ ...inputData, penghasilan: text })
                }
                value={setInputData.penghasilan}
                placeholder="12.75%"
                editable={false}
                placeholderTextColor="gray"
              ></TextInput>
            </View>

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
                      <Text style={styles.text}>Hasil</Text>
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
                              fontWeight: "500",
                              fontSize: 14,
                            }}
                          >
                            {view.content}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  <TouchableOpacity style={styles.button} onPress={taruhData}>
                    <Text style={styles.simulasikan}> Selanjutnya</Text>
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
export default SimulasiFleksiAktif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    // marginTop: 40,
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
    shadowRadius: 10,
  },
  show: {
    paddingHorizontal: 4,
    // backgroundColor: "red",
  },
  tableShadow: {
    backgroundColor: "white",
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
  texttitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 24,
    textAlign: "center",
  },
  centerred: {
    alignItems: "center",
  },
  bodyContainer: {
    width: "100%",
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
    // paddingTop: 6,
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
  inputFill: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 16,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#9E9E9E",
    borderWidth: 1,
  },
  formSimulasi: {
    paddingTop: 24,
  },
  textform: {
    fontWeight: "800",
  },
  textButton: {
    alignSelf: "center",
    // paddingTop: 8,
    color: "white",
    fontWeight: "800",
    fontSize: 14,
  },
  dropdownContent: {
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    marginTop: 10,
    width: "100%",
  },
  text: {
    fontWeight: "700",
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    borderColor: "#000",
    marginBottom: 15,
    justifyContent: "space-around",
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
