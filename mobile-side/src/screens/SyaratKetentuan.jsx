import React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from @expo/vector-icons
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import NotificationSuccess from "./NotificationSuccess";

const SyaratKetentuan = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("KetentuanGriya")}>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
          />
        </TouchableOpacity>

        <Text>Digital Loan</Text>
        <Image
          source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        />
      </View>

      <ScrollView>
        <View style={styles.isi}>
          <Text
            style={{
              marginBottom: 8,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Syarat dan Ketentuan
          </Text>
          <Text style={styles.isitext}>
            Dengan menekan tombol "Setuju & Ajukan Pinjaman" di bawah ini, saya
            menyatakan hal-hal sebagai berikut :
          </Text>
          <View style={styles.nomor2}>
            <View style={styles.poinpoin}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  // backgroundColor: "yellow",
                }}
              >
                <Text>1. </Text>
                <Text style={styles.isitext}>
                  Data dan informasi yang saya berikan dalam pengajuan ini
                  adalah sesuai keadaaan yang sebenar-benarnya.
                </Text>
              </View>
              <View style={styles.rowisi}>
                <Text>2. </Text>
                <View style={styles.rowisi}>
                  <Text style={styles.isitext}>
                    Saya menyetujui bahwa PT. Bank Negara Indonesia (Persero),
                    Tbk, selanjutnya disebut Bank, berwenang untuk:
                  </Text>
                  <View style={styles.rowisi}>
                    <Text>a. </Text>
                    <Text style={styles.isitext}>
                      Memeriksa kebenaran data yang saya sampaikan dalam
                      pengajuan ini.
                    </Text>
                  </View>
                  <View style={styles.rowisi}>
                    <Text>b. </Text>
                    <Text style={styles.isitext}>
                      Mencari dan memperoleh keterangan dan referensi dari
                      sumber manapun dengan cara yang dianggap sah oleh Bank.
                    </Text>
                  </View>
                  <View style={styles.rowisi}>
                    <Text>c. </Text>
                    <Text style={styles.isitext}>
                      Menyetujui atau menolak pengajuan pinjaman saya
                      berdasarkan analisa Bank.
                    </Text>
                  </View>
                  <View style={styles.rowisi}>
                    <Text>d. </Text>
                    <Text style={styles.isitext}>
                      Tidak mengembalikan seluruh dokumen yang telah saya
                      serahkan kepada Bank
                    </Text>
                  </View>
                  <View style={styles.rowisi}>
                    <Text>e. </Text>
                    <Text style={styles.isitext}>
                      Memberikan secara terbatas dan/atau tidak terbatas data
                      yang telah saya sampaikan dalam pengajuan ini kepada pihak
                      ketiga dalam rangka kepentingan pemrosesan pengajuan
                      pinjaman
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rowIsi}>
            <Text>3. </Text>
            <Text style={styles.isitext}>
              Saya memahami dan mengerti bahwa Bank tidak berkewajiban untuk
              memberikan fasilitas kredit kepada saya hingga saya memenuhi semua
              persyaratan yang berlaku pada Bank dan telah menandatangani
              dokumen yang diperlukan Bank dalam pemberian kredit.
            </Text>
          </View>

          <View style={styles.rowIsi}>
            <Text>4. </Text>
            <Text style={styles.isitext}>
              Apabila ternyata data dan informasi, serta pernyataan yang saya
              berikan/buat tidak sesuai dengan keadaan yang sebenarnya, maka
              segala risiko dan konsekuensi yang diakibatkannya menjadi
              sepenuhnya tanggung jawab saya.
            </Text>
          </View>
          <TouchableOpacity
            onPress={toggleCheckbox}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <FontAwesome
              name={checked ? "check-square-o" : "square-o"}
              size={24}
              color="black"
            />
            <Text style={{ marginLeft: 8, fontSize: 12 }}>
              Saya menyetujui syarat dan ketentuan ini
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={openModal}>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 13,
                color: "white",
                fontWeight: "900",
              }}
            >
              Ajukan Pinjaman
            </Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              {/* Pressable di luar modal */}
              <Pressable
                style={{
                  flex: 1,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                {/* ModalAwal tetap berada di dalam View */}
              </Pressable>
              <View>
                <NotificationSuccess
                  navigation={navigation}
                ></NotificationSuccess>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};
export default SyaratKetentuan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 40,
    height: "100%",
    // backgroundColor: "red",
  },

  button1: {
    marginTop: 10,
    marginBottom: 56,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    height: 44,
    width: "100%",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
  },
  isi: {
    // backgroundColor: "yellow",
    marginTop: 24,
    width: "100%",
  },
  isitext: {
    textAlign: "justify",
    lineHeight: 18,
    // backgroundColor: "green",

    // width: "100%",
  },
  poinpoin: {
    width: "100%",
  },
  rowIsi: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center", // Pusatkan konten secara horizontal
    // alignItems: "center", // Pusatkan konten secara vertikal
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Atur warna latar belakang
  },
});
