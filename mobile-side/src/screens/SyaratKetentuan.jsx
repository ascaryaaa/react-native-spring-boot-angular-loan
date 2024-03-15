import React from 'react';
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from @expo/vector-icons
import { View, Text, StyleSheet, TouchableOpacity, toggleCheckbox} from 'react-native';
import { useState } from 'react';

const SyaratKetentuan = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 16, fontWeight:'600' }}>Syarat dan Ketentuan</Text>
      <Text>Dengan menekan tombol "Setuju & Ajukan Pinjaman" di bawah ini, saya menyatakan hal-hal sebagai berikut :</Text>
      <View style={styles.text}>
        <Text>1. </Text>
        <Text>Data dan informasi yang saya berikan dalam pengajuan ini adalah sesuai keadaaan yang sebenar-benarnya.</Text>
      </View>
      <View style={styles.text}>
        <Text>2. </Text>
        <View style={styles.text1}>
          <Text>Saya menyetujui bahwa PT. Bank Negara Indonesia (Persero), Tbk, selanjutnya disebut Bank, berwenang untuk:</Text>
          <View style={styles.text}>
            <Text>a. </Text>
            <Text>Memeriksa kebenaran data yang saya sampaikan dalam pengajuan ini.</Text>
          </View>
          <View style={styles.text}>
            <Text>b. </Text>
            <Text>Mencari dan memperoleh keterangan dan referensi dari sumber manapun dengan cara yang dianggap sah oleh Bank.</Text>
          </View>
          <View style={styles.text}>
            <Text>c. </Text>
            <Text>Menyetujui atau menolak pengajuan pinjaman saya berdasarkan analisa Bank.</Text>
          </View>
          <View style={styles.text}>
            <Text>d. </Text>
            <Text>Tidak mengembalikan seluruh dokumen yang telah saya serahkan kepada Bank</Text>
          </View>
          <View style={styles.text}>
            <Text>e. </Text>
            <Text>Memberikan secara terbatas dan/atau tidak terbatas data yang telah saya sampaikan dalam pengajuan ini kepada pihak ketiga dalam rangka kepentingan pemrosesan pengajuan pinjaman</Text>
          </View>
        </View>
      </View>
      <View style={styles.text}>
        <Text>3. </Text>
        <Text>Saya memahami dan mengerti bahwa Bank tidak berkewajiban untuk memberikan fasilitas kredit kepada saya hingga saya memenuhi semua persyaratan yang berlaku pada Bank dan telah menandatangani dokumen yang diperlukan Bank dalam pemberian kredit.</Text>
      </View>
      <View style={styles.text}>
        <Text>4. </Text>
        <Text>Apabila ternyata data dan informasi, serta pernyataan yang saya berikan/buat tidak sesuai dengan keadaan yang sebenarnya, maka segala risiko dan konsekuensi yang diakibatkannya menjadi sepenuhnya tanggung jawab saya.</Text>
      </View>
      <TouchableOpacity
        onPress={toggleCheckbox}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 18,
        }}>
        <FontAwesome
          name={checked ? "check-square-o" : "square-o"}
          size={24}
          color="black"
        />
        <Text style={{ marginLeft: 8 }}>Saya menyetujui syarat dan ketentuan ini</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('NotificationSuccess')}>
        <Text style={{textAlign: 'center', paddingTop: 13, color: 'white', fontWeight: '900'}}>Ajukan Pinjaman</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SyaratKetentuan;

const styles = StyleSheet.create({
container: {
    flex:1,
    padding: 10,
},
button: {
    backgroundColor:'lightgrey',
    padding: 5,
    borderRadius: 5,
    margin: 5,
},
button1: {
  marginTop: 10,
  backgroundColor: '#18C1CD',
  borderRadius: 20,
  width: 390,
  height: 44,
},
text: {
  flexDirection: 'row',
},
text1: {
  flexDirection: 'column',
}
})