import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackNavbar from "../components/svg/BackNavbar";
import HomeNavbar from "../components/svg/HomeNavbar";


const ProfileKeuanganGriya = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    hargaRumah: "",
    penghasilan: "",
    jangkaWaktu: "",
    uangMuka: "",
  });

  const [maksAngsuran, setmaksAngsuran] = useState()

  const [inputErrors, setInputErrors] = useState({
    hargaRumah: false,
    jangkaWaktu: false,
    uangMuka: false,
    penghasilan: false,
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

  const jumlahUangMuka = (inputData.uangMuka/100)*inputData.hargaRumah
  const totalPinjaman = inputData.hargaRumah-jumlahUangMuka
  const angsuranPerbulan = (totalPinjaman*(0.0675/12))/(1-Math.pow(1+(0.0675/12),-inputData.jangkaWaktu));

  const data = [
    { id: 1, title: "Harga Rumah", content: `Rp ${inputData.hargaRumah.toLocaleString('id-ID', {maximumFractionDigits:2, })}` },
    { id: 2, title: "Jangka Waktu", content: `${inputData.jangkaWaktu} bulan` },
    { id: 3, title: "Presentase Uang Muka (%)", content: `${inputData.uangMuka}%` },
    { id: 4, title: "Uang Muka", content: `Rp ${jumlahUangMuka.toLocaleString('id-ID', {maximumFractionDigits: 2})}` },
    { id: 5, title: "Suku Bunga per Tahun", content: "6,75%" },
    { id: 6, title: "Total Pinjaman", content: `Rp ${totalPinjaman.toLocaleString('id-ID', {maximumFractionDigits: 2})}` },
    { id: 7, title: "Angsuran Pinjaman per Bulan", content: `Rp ${angsuranPerbulan.toLocaleString('id-ID', {maximumFractionDigits: 2})}` },
  ];

  const taruhData = async () => {
    if (validateInputs()) {
      try {
        await AsyncStorage.setItem('penghasilan',String(inputData.penghasilan));
        AsyncStorage.setItem('jangkaWaktu',String(inputData.jangkaWaktu));
        AsyncStorage.setItem('hargaRumah',String(inputData.hargaRumah));
        AsyncStorage.setItem('uangMuka',String(inputData.uangMuka));
        AsyncStorage.setItem('jumlahUangMuka',String(jumlahUangMuka));
        AsyncStorage.setItem('totalPinjaman',String(totalPinjaman));
        AsyncStorage.setItem('angsuranPerbulan',String(angsuranPerbulan));

        const savedData = await AsyncStorage.getItem("penghasilan");
        console.log("Penghasilan:", savedData);
        const savedData2 = await AsyncStorage.getItem("jangkaWaktu");
        console.log("Jangka Waktu:", savedData2);
        const savedData3 = await AsyncStorage.getItem("hargaRumah");
        console.log("Harga Rumah:", savedData3);
        const savedData4 = await AsyncStorage.getItem("uangMuka");
        console.log("Uang Muka:", JSON.parse(savedData4));
        const savedData5 = await AsyncStorage.getItem("jumlahUangMuka");
        console.log("Jumlah Uang Muka:", JSON.parse(savedData5));
        const savedData6 = await AsyncStorage.getItem("totalPinjaman");
        console.log("Total Pinjaman:", JSON.parse(savedData6));
        const savedData7 = await AsyncStorage.getItem("angsuranPerbulan");
        console.log("Angsuran Perbulan:", JSON.parse(savedData7));

        navigation.navigate("DataPemohon")
      } catch (error) {
        console.error('Failed to save or retrieve the data from AsyncStorage', error);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        // Mengambil data dari AsyncStorage
        const penghasilanData = await AsyncStorage.getItem("penghasilan");
        const jangkaWaktuData = await AsyncStorage.getItem("jangkaWaktu");
        const simulasiPinjamanData = await AsyncStorage.getItem("simulasiPinjaman");

        //parse the retrieved data
        const penghasilan =
          penghasilanData !== null ? JSON.parse(penghasilanData) : "";
        const jangkaWaktu =
          jangkaWaktuData !== null ? JSON.parse(jangkaWaktuData) : "";
        const simulasiPinjaman =
          simulasiPinjamanData !== null ? parseFloat(simulasiPinjamanData) : "";
        
        console.log(simulasiPinjaman);

        //set the parsed data to the state
        setInputData({
          penghasilan: penghasilan,
          jangkaWaktu: jangkaWaktu,
          hargaRumah: "",
          uangMuka: "",
        });

        setmaksAngsuran(simulasiPinjaman)

      } catch (error) {
        console.error("Failed to fetch data from AsyncStorage", error);
      }
    };

    // Panggil fungsi untuk mengambil data saat komponen dimuat
    getData();
  },[maksAngsuran]);

  // Handle validasi maksimal jumlah pinjaman
  const handleNumberChange = (input) => {
    // Check if the input is not empty
    if (input !== '') {
      // Check if the input is within the acceptable range 
      if (parseInt(input) <= maksAngsuran) {
        setInputData({ ...inputData, hargaRumah: input });
      } else {
        // Display an error message if the input exceeds the maximum allowed value
        Alert.alert('Error', 'Maximum number allowed is '+`Rp ${maksAngsuran.toLocaleString("id-ID", {maximumFractionDigits: 2,})}`);
      }
    } else {
      // If the input is empty, clear the hargaRumah field
      setInputData({ ...inputData, hargaRumah: '' });
    }
    
  };
  
  useEffect(() => {
    console.log(
      "////////////////////////////////////////Input Errors:",
      inputErrors
    );
    console.log(
      "########################################Input Data:",
      inputData
    );
  }, [inputErrors, inputData]);

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SimulasiGriya")}
          >
            <BackNavbar/>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Digital Loan</Text>
          <HomeNavbar></HomeNavbar>
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Profil Keuangan</Text>

            <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
            <TextInput
              style={[styles.inputFill, inputErrors.penghasilan && styles.inputError]}
              keyboardType="numeric"
              placeholder={`Rp ${inputData.penghasilan.toLocaleString('id-ID', {maximumFractionDigits:2, })}`}
              editable={false}
              onChangeText={(number) =>
                setInputData({ ...inputData, penghasilan: number })
              }
            />
            {inputErrors.penghasilan && (
              <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
            )}

            <Text style={styles.text}>Jangka Waktu</Text>
            <View>
            <TextInput
              style={[styles.input2, inputErrors.jangkaWaktu && styles.inputError ]}
              keyboardType="numeric"
              editable={false}
              placeholder={`${inputData.jangkaWaktu}`}
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
            </View>

            <Text style={styles.text}>Harga Rumah</Text>
            <TextInput
              style={[styles.input, inputErrors.hargaRumah && styles.inputError ]}
              placeholder="Rp"
              value={
                inputData.hargaRumah 
                // === ""
                //   ? ""
                //   : inputData.hargaRumah.toString()
              }
              keyboardType="numeric"
              onChangeText={handleNumberChange}

              // onChangeText={(number) => {
              //   const parsedNumber = parseInt(number);
              //   setInputData({
              //     ...inputData,
              //     hargaRumah: isNaN(parsedNumber) ? "" : parsedNumber,
              //   });
              // }}
            />
            {inputErrors.hargaRumah && (
              <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
            )}

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

            <Text style={styles.text}>Bunga Pinjaman</Text>
            <TextInput
              style={styles.inputFill}
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
                    onPress={taruhData}
                    // onPress={() => navigation.navigate("DataPemohon")}
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
