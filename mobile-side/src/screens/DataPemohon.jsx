import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import Buttonjk from "../components/Buttonjk";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccountByHashedId } from "../reducers/Account";

const DataPemohon = ({ navigation }) => {
  const accountState = useSelector((state) => state.account);
  const dispatchAccount = useDispatch();
  const dispatch = useDispatch();
  const [hashedId, setHashedId] = useState(null);

  const [inputData, setInputData] = useState({
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    alamat: "",
    kodePos: "",
    kelurahan: "",
    kecamatan: "",
    npwp: "",
    alamatBni: "",
  });

  const [inputErrors, setInputErrors] = useState({
    jenisKelamin: false,
    tempatLahir: false,
    tanggalLahir: false,
    alamat: false,
    kodePos: false,
    kelurahan: false,
    kecamatan: false,
    npwp: false,
    alamatBni: false,
  });

  const validateInputs = () => {
    const errors = {};
    let isValid = true;
    for (const key in inputData) {
      if (!inputData[key]) {
        errors[key] = true;
        isValid = false;
      }
    }
    if (!selectedDate) {
      errors["tanggalLahir"] = true;
      isValid = false;
    } else {
      errors["tanggalLahir"] = false;
    }
    if (!selectedBniAddress) {
      errors["alamatBni"] = true;
      isValid = false;
    } else {
      errors["alamatBni"] = false;
    }
    if (!selectedGender) {
      errors["jenisKelamin"] = true;
      isValid = false;
    } else {
      errors["jenisKelamin"] = false;
    }
    setInputErrors(errors);
    return isValid;
  };

  const handleNext = () => {
    if (validateInputs()) {
      navigation.navigate("KetentuanGriya");
    }
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBniAddress, setSelectedBniAddress] = useState(false); // State untuk menyimpan nilai terpilih
  const [selectedGender, setSelectedGender] = useState(""); // State untuk jenis kelamin

  const handleGenderSelect = (option) => {
    setSelectedGender(option);
  };

  const handleBniAddressChange = (value) => {
    setSelectedBniAddress(value); // Perbarui nilai terpilih saat terjadi perubahan
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Menambahkan '0' di depan jika hanya satu digit
    const day = String(date.getDate()).padStart(2, "0"); // Menambahkan '0' di depan jika hanya satu digit

    setSelectedDate(`${year}/${month}/${day}`);
    hideDatePicker();
  };

  const taruhData = async () => {
    if (validateInputs()) {
      try {
        await AsyncStorage.setItem('jenisKelamin',String(inputData.jenisKelamin));
        AsyncStorage.setItem('tempatLahir',String(inputData.tempatLahir));
        AsyncStorage.setItem('tanggalLahir',String(inputData.tanggalLahir));
        AsyncStorage.setItem('alamat',String(inputData.alamat));
        AsyncStorage.setItem('kodePos',String(inputData.kodePos));
        AsyncStorage.setItem('kelurahan',String(inputData.kelurahan));
        AsyncStorage.setItem('kecamatan',String(inputData.kecamatan));
        AsyncStorage.setItem('npwp',String(inputData.npwp));
        AsyncStorage.setItem('alamatBni',String(inputData.alamatBni));

        const savedData = await AsyncStorage.getItem('jenisKelamin');
        console.log(JSON.parse(savedData));
        const savedData1 = await AsyncStorage.getItem('tempatLahir');
        console.log(JSON.parse(savedData1));
        const savedData2 = await AsyncStorage.getItem('tanggalLahir');
        console.log(JSON.parse(savedData2));
        const savedData3 = await AsyncStorage.getItem('alamat');
        console.log(JSON.parse(savedData3));
        const savedData4 = await AsyncStorage.getItem('kodePos');
        console.log(JSON.parse(savedData4));
        const savedData5 = await AsyncStorage.getItem('kelurahan');
        console.log(JSON.parse(savedData5));
        const savedData6 = await AsyncStorage.getItem('kecamatan');
        console.log(JSON.parse(savedData6));
        const savedData7 = await AsyncStorage.getItem('npwp');
        console.log(JSON.parse(savedData7));
        const savedData8 = await AsyncStorage.getItem('alamatBni');
        console.log(JSON.parse(savedData8));
        navigation.navigate("KetentuanGriya")
      } catch (error) {
        console.error('Failed to save or retrieve the data from AsyncStorage', error);
      }
    }
  };

  const fetchHashedId = async () => {
    try {
      const storedHashedId = await AsyncStorage.getItem("hashedId");
      if (storedHashedId) {
        setHashedId(storedHashedId);
        dispatchAccount(getAccountByHashedId(storedHashedId));
      }
    } catch (error) {
      console.error("Error fetching hashed ID from AsyncStorage:", error);
    }
  };
  useEffect(() => {
    // fetchInfo();
    // dispatch(getPromos());
    fetchHashedId();
    console.log(
      "////////////////////////////////////////Input Errors:",
      inputErrors
    );
    console.log(
      "########################################Input Data:",
      inputData
    );
  }, [dispatch, dispatchAccount],[inputErrors, inputData]);

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
          <View>
            <Text style={styles.texttitle}>Data Pemohon</Text>
            <Text style={styles.text}>Nama Lengkap (Sesuai KTP)</Text>
            <TextInput
              style={[styles.input, { padding: 10 }]}
              placeholder={accountState.data?.accountToUser.nameUser}
              editable={false}
            />
            <Text style={styles.text}>NIK</Text>
            <TextInput
              style={[styles.input, { padding: 10 }]}
              placeholder={accountState.data?.accountToUser.nikUser}
              editable={false}
            />
            <Text style={styles.text}>Jenis Kelamin</Text>
            {/* <Buttonjk/> */}

            <View style={styles.luar}>
              <TouchableOpacity onPress={() => handleGenderSelect("Pria")}>
                <View
                  style={styles.genderPosition}>
                  <View style={[styles.containerGender, inputErrors.jenisKelamin && styles.inputError]}>
                    {selectedGender === "Pria" && <View style={styles.buttonGender} />}
                  </View>
                  <Text style={styles.textGender}>Pria</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleGenderSelect("Wanita")}>
                <View
                  style={styles.genderPosition}>
                  <View style={[styles.containerGender, inputErrors.jenisKelamin && styles.inputError]}>
                    {selectedGender === "Wanita" && <View style={styles.buttonGender} />}
                  </View>
                  <Text style={styles.textGender}>Wanita</Text>
                </View>
              </TouchableOpacity>
              {inputErrors.jenisKelamin && (
                <Text style={styles.errorText}>Mohon isikan data dengan benar</Text>
              )}
              {/* {errorMessage && <Text>{"testing"}</Text>} */}
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{x,
                  flexDirection: "column",
                  // backgroundColor: "red",
                  width: "47%",
                }}
              >
                <Text style={{ flex: 1, fontWeight: "800" }}>Tempat Lahir</Text>
                <TextInput
                  style={[
                    styles.input1,
                    inputErrors.tempatLahir && styles.inputError,
                  ]}
                  value={inputData.tempatLahir}
                  onChangeText={(text) =>
                    setInputData({ ...inputData, tempatLahir: text })
                  }
                />
                {inputErrors.tempatLahir && (
                  <Text style={styles.errorText}>
                    Mohon isikan data dengan benar
                  </Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  width: "47%",
                }}
              >
                <Text style={{ fontWeight: "800" }}>Tanggal Lahir</Text>

                <TouchableOpacity
                  style={[
                    styles.input2,
                    inputErrors.tanggalLahir && styles.inputError,
                  ]}
                  onPress={showDatePicker}
                >
                  <Text style={{ fontSize: 12 }}>{selectedDate}</Text>
                  <Image
                    style={{ width: 20, height: 24 }}
                    source={require("../../../mobile-side/src/assets/icon_calendar.png")}
                    //   resizeMode="contain"
                  />
                </TouchableOpacity>
                {inputErrors.tanggalLahir && (
                  <Text style={styles.errorText}>
                    Mohon isikan data dengan benar
                  </Text>
                )}
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>

            <Text style={styles.text}>Alamat (Sesuai KTP)</Text>
            <TextInput
              style={[styles.input, inputErrors.alamat && styles.inputError]}
              value={inputData.alamat}
              onChangeText={(text) =>
                setInputData({ ...inputData, alamat: text })
              }
            />
            {inputErrors.alamat && (
              <Text style={styles.errorText}>Mohon isi data dengan benar</Text>
            )}

            <Text style={styles.text}>Kode Pos</Text>
            <TextInput
              style={[styles.input, inputErrors.kodePos && styles.inputError]}
              keyboardType="numeric"
              value={inputData.kodePos}
              onChangeText={(text) =>
                setInputData({ ...inputData, kodePos: text })
              }
            />
            {inputErrors.kodePos && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}

            <Text style={styles.text}>Kelurahan</Text>
            <TextInput
              style={[styles.input, inputErrors.kelurahan && styles.inputError]}
              value={inputData.kelurahan}
              onChangeText={(text) =>
                setInputData({ ...inputData, kelurahan: text })
              }
            />
            {inputErrors.kelurahan && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}

            <Text style={styles.text}>Kecamatan</Text>
            <TextInput
              style={[styles.input, inputErrors.kecamatan && styles.inputError]}
              value={inputData.kecamatan}
              onChangeText={(text) =>
                setInputData({ ...inputData, kecamatan: text })
              }
            />
            {inputErrors.kecamatan && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benar
              </Text>
            )}

            <Text style={styles.text}>NPWP</Text>
            <TextInput
              style={[styles.input, inputErrors.npwp && styles.inputError]}
              keyboardType="numeric"
              value={inputData.npwp}
              onChangeText={(number) =>
                setInputData({ ...inputData, npwp: number })
              }
            />
            {inputErrors.npwp && (
              <Text style={styles.errorText}>
                Mohon isikan data dengan benars
              </Text>
            )}

            <Text style={styles.text}>Unit Kerja BNI Terdekat</Text>
            <View
              style={[styles.input, inputErrors.alamatBni && styles.inputError]}
            >
              <RNPickerSelect
                onValueChange={handleBniAddressChange}
                items={[
                  { label: "BNI Kota Tua", value: "007" },
                  { label: "BNI Head Office", value: "001" },
                  // Tambahkan item lainnya sesuai kebutuhan
                ]}
                placeholder={{
                  label: "Pilih alamat BNI terdekat...",
                  value: null,
                }}
                value={selectedBniAddress}
              />
            </View>
            {inputErrors.alamatBni && (
              <Text style={styles.errorText}>
                Mohon pilih alamat BNI terdekat
              </Text>
            )}

            <View style={styles.bawah}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.sebelumnya}>Sebelumnya</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={
                  taruhData
                }>
                <Text
                  style={{
                    alignSelf: "center",
                    paddingTop: 8,
                    color: "white",
                    fontWeight: "900",
                  }}
                >
                  Selanjutnya
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default DataPemohon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    // marginTop: 40,
    height: "100%",
    // margin: 10,
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
    width: "100%",
    verticalAlign: "top",
    paddingTop: 60,
    padding: 12,
    backgroundColor: "#FFF",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
  },
  texttitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 24,
    marginBottom: 20,
  },
  button: {
    padding: 5,
    margin: 5,
    alignSelf: "flex-end",
    // marginLeft: 80,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 130,
    height: 44,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 24,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
  input1: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
    height: 37,
  },
  input2: {
    width: "100%",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
    height: 37,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "700",
    marginBottom: 8,
  },
  bawah: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  inputError: {
    borderColor: "red",
    marginBottom: 8,
  },
  sebelumnya: {
    alignSelf: "center",
    paddingTop: 8,
    color: "white",
    fontWeight: "900",
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

  containerGender: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#1394AD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  buttonGender: {
    height: 12,
    width: 12,
    borderRadius: 8,
    backgroundColor: "#000",
  },
  textGender: {
    fontWeight: "400",
  },
  luar: {
    marginBottom: 24,
  },
  genderPosition: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },
});
