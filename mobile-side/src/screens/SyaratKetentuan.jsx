import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import NotificationSuccess from "./NotificationSuccess";

const SyaratKetentuan = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>
        Syarat dan Ketentuan
      </Text>
      <Text>
        Dengan menekan tombol "Setuju & Ajukan Pinjaman" di bawah ini, saya
        menyatakan hal-hal sebagai berikut :
      </Text>
      <Text>
        1. Data dan informasi yang saya berikan dalam pengajuan ini adalah
        sesuai keadaaan yang sebenar-benarnya.
      </Text>
      <Text>
        2. Saya menyetujui bahwa PT. Bank Negara Indonesia (Persero), Tbk,
        selanjutnya disebut Bank, berwenang untuk:
      </Text>
      <Text>
        a. Memeriksa kebenaran data yang saya sampaikan dalam pengajuan ini.
      </Text>
      <Text>
        b. Mencari dan memperoleh keterangan dan referensi dari sumber manapun
        dengan cara yang dianggap sah oleh Bank.
      </Text>
      <Text>
        c. Menyetujui atau menolak pengajuan pinjaman saya berdasarkan analisa
        Bank.
      </Text>
      <Text>
        d. Tidak mengembalikan seluruh dokumen yang telah saya serahkan kepada
        Bank
      </Text>
      <Text>
        e. Memberikan secara terbatas dan/atau tidak terbatas data yang telah
        saya sampaikan dalam pengajuan ini kepada pihak ketiga dalam rangka
        kepentingan pemrosesan pengajuan pinjaman
      </Text>
      <Text>
        3. Saya memahami dan mengerti bahwa Bank tidak berkewajiban untuk
        memberikan fasilitas kredit kepada saya hingga saya memenuhi semua
        persyaratan yang berlaku pada Bank dan telah menandatangani dokumen yang
        diperlukan Bank dalam pemberian kredit.
      </Text>
      <Text>
        4. Apabila ternyata data dan informasi, serta pernyataan yang saya
        berikan/buat tidak sesuai dengan keadaan yang sebenarnya, maka segala
        risiko dan konsekuensi yang diakibatkannya menjadi sepenuhnya tanggung
        jawab saya.
      </Text>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text>Selanjutnya</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalContainer} onPress={closeModal}>
          <View style={styles.button}>
            <NotificationSuccess navigation={navigation} />
          </View>
        </Pressable>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NotificationFailed")}
      >
        <Text>Selanjutnya</Text>
      </TouchableOpacity>
      {/* <Modal
          transparent
          animationType='fade'
          onRequestClose={closeModal} /> */}
    </View>
  );
};
export default SyaratKetentuan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  button: {
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // backgroundColor: "red",
  },
});
