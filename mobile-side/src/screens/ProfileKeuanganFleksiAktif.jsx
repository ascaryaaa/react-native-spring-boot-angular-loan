import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { number } from "yup";
import BackNavbar from "../components/svg/BackNavbar";
import HomeNavbar from "../components/svg/HomeNavbar";


const ProfileKeuanganFleksiAktif = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilan: "",
    jumlahPinjaman: "",
    jangkaWaktu: "",
  });

  const [maksAngsuran, setmaksAngsuran] = useState()

  const [inputErrors, setInputErrors] = useState({
    penghasilan: false,
    jumlahPinjaman: false,
    jangkaWaktu: false,
  });

  const angsuranPerbulan =
    (inputData.jumlahPinjaman * (0.1275 / 12)) /
    (1 - Math.pow(1 + 0.1275 / 12, -inputData.jangkaWaktu));

  const data = [
    {
      id: 1,
      title: "Penghasilan Bersih per Bulan",
      content: `Rp ${inputData.penghasilan.toLocaleString("id-ID", {
        maximumFractionDigits: 2,
      })}`,
    },
    { id: 2, title: "Jangka Waktu", content: inputData.jangkaWaktu },
    { id: 3, title: "Suku Bunga per Tahun", content: "12,75%" },
    {
      id: 4,
      title: "Total Pinjaman",
      content: `Rp ${inputData.jumlahPinjaman}`,
    },
    {
      id: 5,
      title: "Angsuran Pinjaman per Bulan",
      content: `Rp ${angsuranPerbulan.toLocaleString("id-ID", {
        maximumFractionDigits: 2,
      })}`,
    },
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


  const taruhData = async () => {
    if (validateInputs()) {
      try {
        // Stringify and save inputData to AsyncStorage
        await AsyncStorage.setItem(
          "penghasilan",
          String(inputData.penghasilan)
        );
        await AsyncStorage.setItem(
          "jangkaWaktu",
          String(inputData.jangkaWaktu)
        );
        await AsyncStorage.setItem(
          "jumlahPinjaman",
          String(inputData.jumlahPinjaman)
        );
        await AsyncStorage.setItem(
          "angsuranPerbulan",
          JSON.stringify(angsuranPerbulan)
        );

        // Retrieve and log the saved items
        const savedData = await AsyncStorage.getItem("penghasilan");
        console.log("Penghasilan:", savedData);
        const savedData2 = await AsyncStorage.getItem("jangkaWaktu");
        console.log("Jangka Waktu:", savedData2);
        const savedData3 = await AsyncStorage.getItem("jumlahPinjaman");
        console.log("Jumlah Pinjaman:", savedData3);
        const savedData4 = await AsyncStorage.getItem("angsuranPerbulan");
        console.log("Angsuran Perbulan:", JSON.parse(savedData4));

        navigation.navigate("DataPemohon");
      } catch (error) {
        console.error(
          "Failed to save or retrieve data from AsyncStorage",
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
    const getData = async () => {
      try {
        // Mengambil data dari AsyncStorage
        const penghasilanData = await AsyncStorage.getItem("penghasilan");
        const jangkaWaktuData = await AsyncStorage.getItem("jangkaWaktu");
        const simulasiPinjamanData = await AsyncStorage.getItem("simulasiPinjaman");

        // Parse the retrieved data
        const penghasilan =
          penghasilanData !== null ? JSON.parse(penghasilanData) : "";
        const jangkaWaktu =
          jangkaWaktuData !== null ? JSON.parse(jangkaWaktuData) : "";
        const simulasiPinjaman =
          simulasiPinjamanData !== null ? parseFloat(simulasiPinjamanData) : "";

        // console.log(simulasiPinjaman)

        // Set the parsed data to the state
        setInputData({
          penghasilan: penghasilan,
          jumlahPinjaman: "",
          jangkaWaktu: jangkaWaktu,
        });

        setmaksAngsuran(simulasiPinjaman)
        // console.log(inputData.jangkaWaktu)
        // console.log(maksAngsuran)
      } catch (error) {
        console.error("Failed to fetch data from AsyncStorage", error);
      }
    };

    // Panggil fungsi untuk mengambil data saat komponen dimuat
    getData();
  }, [maksAngsuran]);

  
  // Handle validasi maksimal jumlah pinjaman
  const handleNumberChange = (input) => {
    // Check if the input is within the acceptable range
    if (parseInt(input) <= maksAngsuran) {
      setInputData({ ...inputData, jumlahPinjaman: input });
    } else {
      // Display an error message if the input exceeds the maximum allowed value
      Alert.alert('Error', 'Maximum number allowed is '+`Rp ${maksAngsuran.toLocaleString("id-ID", {maximumFractionDigits: 2,})}`);
    }
  };

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackNavbar></BackNavbar>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Digital Loan</Text>
          <HomeNavbar></HomeNavbar>
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
                styles.inputFill,
                inputErrors.penghasilan && styles.inputError,
              ]}
              // placeholder="Penghasilan Bersih per. Bulan"
              keyboardType="numeric"
              placeholder={`Rp ${inputData.penghasilan.toLocaleString("id-ID", {
                maximumFractionDigits: 2,
              })}`}
              editable={false}
              value={inputData.penghasilan}
              onChangeText={(number) =>
                setInputData({ ...inputData, penghasilan: number })
              }
            />
            {inputErrors.penghasilan && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}

            <Text style={styles.text}>Jangka Waktu</Text>
            <View>
            <TextInput
              style={[
                styles.input2,
                inputErrors.jangkaWaktu && styles.inputError,
              ]}
              // placeholder="Jangka Waktu"
              value={inputData.jangkaWaktu}
              placeholder={inputData.jangkaWaktu.toString()}
              editable={false}
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
            </View>

            <Text style={styles.text}>Jumlah Pinjaman yang Diajukan</Text>
            <TextInput
              style={[
                styles.input,
                inputErrors.jumlahPinjaman && styles.inputError,
              ]}
              value={
                inputData.jumlahPinjaman
              }
              keyboardType="numeric"
              placeholder="Rp"
              onChangeText={
                // (number) => setInputData({ ...inputData, jumlahPinjaman: number })
                handleNumberChange
                }
            />
            {inputErrors.jumlahPinjaman && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}
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
                  <Text
                    style={{
                      fontWeight: "300",
                      // fontWeight: "500",
                      fontSize: 12,
                    }}
                  >
                    *Simulasi menggunakan suku bunga yang berlaku saat ini
                  </Text>
                  <TouchableOpacity style={styles.button1} onPress={taruhData}>
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
    borderColor: "#9E9E9E",
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
