import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileKeuanganFleksiPensiun = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    penghasilan: "",
    jumlahPinjaman: "",
    jangkaWaktu: "",
  });

  const [inputErrors, setInputErrors] = useState({
    penghasilan: false,
    jumlahPinjaman: false,
    jangkaWaktu: false,
  });

  const angsuranPerbulan =
    (inputData.jumlahPinjaman * (0.1074 / 12)) /
    (1 - Math.pow(1 + 0.1074 / 12, -inputData.jangkaWaktu));

  const data = [
    {
      id: 1,
      title: "Penghasilan Bersih per Bulan",
      content: `Rp ${inputData.penghasilan.toLocaleString("id-ID", {
        maximumFractionDigits: 2,
      })}`,
    },
    { id: 2, title: "Jangka Waktu", content: inputData.jangkaWaktu },
    { id: 3, title: "Suku Bunga per Tahun", content: "10,74%" },
    {
      id: 4,
      title: "Total Pinjaman",
      content: `Rp ${inputData.jumlahPinjaman.toLocaleString("id-ID", {
        maximumFractionDigits: 2,
      })}`,
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
      } else {
        errors[key] = false; // Reset error jika input sudah diisi
      }
    }
    setInputErrors(errors);
    return isValid;
  };

  const handleNext = () => {
    if (validateInputs()) {
      // Proceed to the next step

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
    if (validateInputs()) {
      setIsDropdownOpen(!isDropdownOpen);
      setHidedButton(true);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        // Mengambil data dari AsyncStorage
        const penghasilanData = await AsyncStorage.getItem("penghasilan");
        const jangkaWaktuData = await AsyncStorage.getItem("jangkaWaktu");

        // Parse the retrieved data
        const penghasilan =
          penghasilanData !== null ? JSON.parse(penghasilanData) : "";
        const jangkaWaktu =
          jangkaWaktuData !== null ? JSON.parse(jangkaWaktuData) : "";

        // Set the parsed data to the state
        setInputData({
          penghasilan: penghasilan,
          jumlahPinjaman: "",
          jangkaWaktu: jangkaWaktu,
        });
      } catch (error) {
        console.error("Failed to fetch data from AsyncStorage", error);
      }
    };

    // Panggil fungsi untuk mengambil data saat komponen dimuat
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(
  //     "////////////////////////////////////////Input Errors:",
  //     inputErrors
  //   );
  //   console.log(
  //     "########################################Input Data:",
  //     inputData
  //   );
  // }, [inputErrors, inputData]);

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
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 16 }}>
            Profil Keuangan
          </Text>

          <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
          <TextInput
            style={[styles.input, inputErrors.penghasilan && styles.inputError]}
            value={inputData.penghasilan}
            editable={false}
            keyboardType="numeric"
            placeholder={`Rp ${inputData.penghasilan.toLocaleString("id-ID", {
              maximumFractionDigits: 2,
            })}`}
            onChangeText={(number) =>
              setInputData({ ...inputData, penghasilan: number })
            }
          />
          {inputErrors.penghasilan && (
            <Text style={styles.errorText}>Field ini wajib diisi</Text>
          )}

          <Text style={styles.text}>Jangka Waktu</Text>
          <TextInput
            style={[styles.input, inputErrors.jangkaWaktu && styles.inputError]}
            value={inputData.jangkaWaktu}
            keyboardType="numeric"
            placeholder={inputData.jangkaWaktu.toString()}
            editable={false}
            onChangeText={(number) =>
              setInputData({ ...inputData, jangkaWaktu: number })
            }
          />
          {inputErrors.jangkaWaktu && (
            <Text style={styles.errorText}>Field ini wajib diisi</Text>
          )}
          <Text style={{ fontSize: 10, marginBottom: 16 }}>
            *Maksimal 180 Bulan
          </Text>
          <Text style={styles.text}>Jumlah Pinjaman yang Diajukan</Text>
          <TextInput
            style={[
              styles.input,
              inputErrors.jumlahPinjaman && styles.inputError,
            ]}
            value={
              inputData.jumlahPinjaman === ""
                ? ""
                : inputData.jumlahPinjaman.toString()
            }
            keyboardType="numeric"
            onChangeText={(number) => {
              const parsedNumber = parseInt(number);
              setInputData({
                ...inputData,
                jumlahPinjaman: isNaN(parsedNumber) ? "" : parsedNumber,
              });
            }}
          />
          {inputErrors.jumlahPinjaman && (
            <Text style={styles.errorText}>Field ini wajib diisi</Text>
          )}

          <Text style={styles.text}>Bunga Pinjaman</Text>
          <TextInput
            style={styles.input}
            placeholder="10,74"
            placeholderTextColor="gray"
            editable={false}
          />
          <View style={styles.container1}>
            {!hidedButton && (
              <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.textButton}>Simulasi Angsuran</Text>
              </TouchableOpacity>
            )}
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
  inputError: {
    borderColor: "red",
    marginBottom: 8,
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
});
