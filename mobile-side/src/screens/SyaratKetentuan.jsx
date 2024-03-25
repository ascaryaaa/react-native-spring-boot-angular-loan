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

      <ScrollView style={styles.container}>
        <View style={styles.isi}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Syarat dan Ketentuan
          </Text>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.textContent}>
              Dengan menekan tombol “Ajukan Pinjaman” di bawah ini, saya
              menyetujui hal-hal sebagai berikut
            </Text>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "5%" }}>
              <Text style={styles.poin}>1.</Text>
            </View>
            <View style={{ width: "95%" }}>
              <Text style={styles.textContent}>
                Data dan informasi yang saya berikan dalam pengajuan ini adalah
                sesuai keadaaan yang sebenar-benarnya.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "5%" }}>
              <Text style={styles.poin}>2.</Text>
            </View>
            <View style={{ width: "95%" }}>
              <Text style={styles.textContent}>
                Saya menyetujui bahwa PT. Bank Rakyat Indonesia (Persero), Tok,
                selanjutnya disebut Bank, berwenang untuk:
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "9%" }}>
              <Text style={styles.poinValue}>a.</Text>
            </View>
            <View style={{ width: "91%" }}>
              <Text style={styles.textContent}>
                Memeriksa kebenaran data yang saya sampaikan dalam pengajuan
                ini.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "9%" }}>
              <Text style={styles.poinValue}>b.</Text>
            </View>
            <View style={{ width: "91%" }}>
              <Text style={styles.textContent}>
                Mencari dan memperoleh keterangan dan referensi dari sumber
                manapun dengan cara yang dianggap sah oleh Bank.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "9%" }}>
              <Text style={styles.poinValue}>c.</Text>
            </View>
            <View style={{ width: "91%" }}>
              <Text style={styles.textContent}>
                Menyetujui atau menolak pengajuan pinjaman saya berdasarkan
                analisa Bank.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "9%" }}>
              <Text style={styles.poinValue}>d.</Text>
            </View>
            <View style={{ width: "91%" }}>
              <Text style={styles.textContent}>
                Tidak mengembalikan seluruh dokumen yang telah saya serahkan
                kepada Bank.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "9%" }}>
              <Text style={styles.poinValue}>e.</Text>
            </View>
            <View style={{ width: "91%" }}>
              <Text style={styles.textContent}>
                Memberikan secara terbatas dan/atau tidak terbatas data yang
                telah saya sampaikan dalam pengajuan ini kepada pihak ketiga
                dalam rangka kepentingan pemrosesan pengajuan pinjaman.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "5%" }}>
              <Text style={styles.poin}>3.</Text>
            </View>
            <View style={{ width: "95%" }}>
              <Text style={styles.textContent}>
                Saya memahami dan mengerti bahwa Bank tidak berkewajiban untuk
                memberikan fasilitas kredit kepada saya hingga saya memenuhi
                semua persyaratan yang berlaku pada Bank dan telah
                menandatangani dokumen yang diperlukan Bank dalam pemberian
                kredit.
              </Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <View style={{ width: "5%" }}>
              <Text style={styles.poin}>4.</Text>
            </View>
            <View style={{ width: "95%" }}>
              <Text style={styles.textContent}>
                Apabila ternyata data dan informasi, serta pernyataan yang saya
                berikan/buat tidak sesuai dengan keadaan yang sebenarnya, maka
                segala risiko dan konsekuensi yang diakibatkannya menjadi
                sepenuhnya tanggung jawab saya.
              </Text>
            </View>
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
              size={20}
              color="#D9D9D9"
            />
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "400" }}>
              Saya menyetujui syarat dan ketentuan ini
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, !checked && { opacity: 0.5 }]}
            onPress={openModal}
            disabled={!checked}
          >
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
    marginTop: 10,
    // height: "100%",
    // backgroundColor: "pink",
  },
  bg: {
    backgroundColor: "white",
    height: "100%",
    // width: "100%",
  },
  button: {
    marginTop: 20,
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
    verticalAlign: "top",
    paddingTop: 60,
    padding: 12,
    backgroundColor: "#FFF",
    // marginBottom: 24,
    // backgroundColor: "red"
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
  },
  poin: {
    lineHeight: 18,
    fontSize: 14,
    fontWeight: "400",
  },
  poinValue: {
    textAlign: "right",
    lineHeight: 18,
    fontSize: 14,
    fontWeight: "400",
  },
  textContent: {
    textAlign: "justify",
    lineHeight: 18,
    fontSize: 14,
    fontWeight: "400",
  },
  rowContent: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center", // Pusatkan konten secara horizontal
    // alignItems: "center", // Pusatkan konten secara vertikal
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Atur warna latar belakang
  },
});
