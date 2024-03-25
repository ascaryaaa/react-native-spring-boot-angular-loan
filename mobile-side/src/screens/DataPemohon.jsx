import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Buttonjk from "../components/Buttonjk";
import Bniaddress from "../components/Bniaddress";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DataPemohon = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    nama: " ",
    nik: " ",
    tempatLahir: " ",
    tanggalLahir: " ",
    alamat: " ",
    kodePos: " ",
    kelurahan: " ",
    kecamatan: " ",
    npwp: " ",
    alamatBni: " ",
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

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
              placeholder="Sarah Johnson"
              editable={false}
            />
            <Text style={styles.text}>NIK</Text>
            <TextInput
              style={[styles.input, { padding: 10 }]}
              placeholder="4829610329478516"
              editable={false}
            />
            <Text style={styles.text}>Jenis Kelamin</Text>
            <Buttonjk />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "column",
                  // backgroundColor: "red",
                  width: "47%",
                }}
              >
                <Text style={{ flex: 1, fontWeight: "800" }}>Tempat Lahir</Text>
                <TextInput
                  style={styles.input1}
                  value={inputData.tempatLahir}
                  onChangeText={(text) =>
                    setInputData({ ...inputData, tempatLahir: text })
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  // backgroundColor: "yellow",
                  width: "47%",
                }}
              >
                <Text style={{ fontWeight: "800" }}>Tanggal Lahir</Text>

                <TouchableOpacity
                  style={styles.input2}
                  onPress={showDatePicker}

                  // placeholder="Tanggal Lahir"
                  // value={inputData.tanggalLahir}
                  // onChangeText={(text) =>
                  //   setInputData({ ...inputData, tempatLahir: text })
                  // }
                >
                  <Text style={{ fontSize: 12 }}>{selectedDate}</Text>
                  <Image
                    style={{ width: 20, height: 24 }}
                    source={require("../../../mobile-side/src/assets/icon_calendar.png")}
                    //   resizeMode="contain"
                  />
                </TouchableOpacity>
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
              style={styles.input}
              value={inputData.alamat}
              onChangeText={(text) =>
                setInputData({ ...inputData, alamat: text })
              }
            />
            <Text style={styles.text}>Kode Pos</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputData.kodePos}
              onChangeText={(text) =>
                setInputData({ ...inputData, kodePos: text })
              }
            />
            <Text style={styles.text}>Kelurahan</Text>
            <TextInput
              style={styles.input}
              value={inputData.kelurahan}
              onChangeText={(text) =>
                setInputData({ ...inputData, kelurahan: text })
              }
            />
            <Text style={styles.text}>Kecamatan</Text>
            <TextInput
              style={styles.input}
              value={inputData.kecamatan}
              onChangeText={(text) =>
                setInputData({ ...inputData, kecamatan: text })
              }
            />
            <Text style={styles.text}>NPWP</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputData.npwp}
              onChangeText={(number) =>
                setInputData({ ...inputData, npwp: number })
              }
            />
            <Text style={styles.text}>Unit Kerja BNI Terdekat</Text>
            <View style={styles.input}>
              <Bniaddress />
            </View>
            <View style={styles.bawah}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.sebelumnya}>Sebelumnya</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("KetentuanGriya")}
              >
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
    // paddingHorizontal: 10,
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
  sebelumnya: {
    alignSelf: "center",
    paddingTop: 8,
    color: "white",
    fontWeight: "900",
  },
});
