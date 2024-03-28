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

const SimulasiFleksiPensiun = ({ navigation }) => {
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

  const maksAngsuran = inputData.penghasilan ? inputData.penghasilan / 2 : 0;
  const maksPinjaman = inputData.jangkaWaktu
    ? (maksAngsuran * (1 - Math.pow(1 + 0.1074 / 12, -inputData.jangkaWaktu))) /
      (0.1074 / 12)
    : 0;

  const data = [
    {
      id: 1,
      title: "Maksimal Pinjaman",
      content: `Rp ${
        maksPinjaman
          ? maksPinjaman.toLocaleString("id-ID", {
              maximumFractionDigits: 2,
            })
          : "0"
      }`,
    },
    {
      id: 2,
      title: "Angsuran Pinjaman per Bulan",
      content: `Rp ${
        maksAngsuran
          ? maksAngsuran.toLocaleString("id-ID", {
              maximumFractionDigits: 2,
            })
          : "0"
      }`,
    },
  ];

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

  const checkAllInputsFilled = () => {
    for (const key in inputData) {
      if (!inputData[key]) {
        return false; // Jika ada input kosong, kembalikan false
      }
    }
    return true; // Jika semua input terisi, kembalikan true
  };

  const idToDisplay = 3;

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
        navigation.navigate("ProfileKeuanganFleksiPensiun");
      } catch (error) {
        console.error(
          "Failed to save or retrieve the data from AsyncStorage",
          error
        );
      }
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setHidedButton(true);
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
              <Text style={styles.texttitle}>Simulasi BNI Fleksi Pensiun</Text>
              <View style={styles.centerred}>
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
                onChangeText={(number) =>
                  setInputData({ ...inputData, penghasilan: number })
                }
                value={inputData.penghasilan}
                keyboardType="numeric"
              ></TextInput>
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
                onChangeText={(number) =>
                  setInputData({ ...inputData, jangkaWaktu: number })
                }
                value={inputData.jangkaWaktu}
                placeholder="bulan"
                keyboardType="numeric"
              ></TextInput>
              {inputErrors.jangkaWaktu && (
                <Text style={styles.errorText}>
                  Mohon isikan data dengan benar
                </Text>
              )}
              <Text style={styles.textform}>Bunga Pinjaman</Text>
              <TextInput
                style={styles.input}
                placeholder="10.74%"
                placeholderTextColor="gray"
                editable={false}
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
                          <View style={{ width: "60%" }}>
                            <Text
                              style={{
                                flex: 1,
                                textAlign: "left",
                                fontWeight: "300",
                                fontSize: 12,
                                // backgroundColor:'yellow',
                              }}
                            >
                              {view.title}
                            </Text>
                          </View>

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
                    <Text style={styles.textButton}> Selanjutnya</Text>
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
export default SimulasiFleksiPensiun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
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
    // paddingHorizontal: 10,
  },
  imgSimulasi: {
    width: 228,
    height: 228,
    marginTop: 16,
    marginBottom: 16,
  },
  // simulasikan: {
  //   color: "#fff",
  //   textAlign: "center",
  //   fontWeight: "800",
  //   paddingTop: 6,
  //   // marginTop: 24,
  // },
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
    paddingTop: 16,
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
    lignSelf: "center",
    color: "white",
    fontWeight: "800",
    fontSize: 14,
  },
  dropdownContent: {
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
