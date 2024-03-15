import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const ProfileKeuanganGriya = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    hargaRumah: " ",
    penghasilanBersih: " ",
    jumlahPinjaman: " ",
    jangkaWaktu: " ",
    uangMuka: " ",
  });

  const data = [

    { id: 1, title: "Harga Rumah", content: "Rp 500.000.000,00" },
    { id: 2, title: "Jangka Waktu", content: "120 Bulan" },
    { id: 3, title: "Presentase Uang Muka (%)", content: "10%" },
    { id: 4, title: "Uang Muka", content: "Rp 50.000.000,00" },
    { id: 5, title: "Suku Bunga per Tahun", content: "6,75%" },
    { id: 6, title: "Total Pinjaman", content: "Rp 450.000.000,00" },
    { id: 7, title: "Angsuran Pinjaman per Bulan", content: "Rp 5.167.445,22" },

  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={{fontWeight: '500', fontSize: 23, marginBottom: 13}}>Profile Keuangan</Text>
        <Text style={styles.text}>Harga Rumah</Text>
        <TextInput
          style={styles.input}
          placeholder="Harga Rumah"
          value={inputData.hargaRumah}
          onChangeText={(number) =>
            setInputData({ ...inputData, hargaRumah: number })
          }
        />

        <Text style={styles.text}>Jangka Waktu</Text>
        <TextInput
          style={styles.input}
          placeholder="Jangka Waktu"
          value={inputData.jangkaWaktu}
          onChangeText={(number) =>
            setInputData({ ...inputData, jangkaWaktu: number })
          }
        />
        <Text style={{ marginBottom: 10, fontSize: 10 }}>
          *Maksimal 360 Bulan
        </Text>

        <Text style={styles.text}>Presentase Uang Muka (%)</Text>
        <TextInput
          style={styles.input}
          placeholder="Presentase Uang Muka"
          value={inputData.uangMuka}
          onChangeText={(number) =>
            setInputData({ ...inputData, uangMuka: number })
          }
        />

        <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
        <TextInput
          style={styles.input}
          placeholder="Penghasilan Bersih per. Bulan"
          value={inputData.penghasilanBersih}
          onChangeText={(number) =>
            setInputData({ ...inputData, penghasilanBersih: number })
          }
        />

        <Text style={styles.text}>Bunga Pinjaman</Text>
        <TextInput
          style={styles.input}
          placeholder="Persediaan Per Tahun"
          value="6,75%"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SyaratKetentuan")}
        >
          <Text
            style={{
              alignSelf: "center",
              paddingTop: 8,
              color: "white",
              fontWeight: "900",
            }}
          >
            Simulasi Angsuran
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Hasil</Text>
        <View style={styles.table}>
          {data.map((view) => (
            <View key={view.id} style={styles.row}>
              <Text style={{ flex: 1, textAlign: "auto" }}>{view.title}</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>:</Text>
              <Text style={{ flex: 1, textAlign: "left" }}>{view.content}</Text>
            </View>
          ))}
        </View>
        <Text style={{fontWeight: '300', marginVertical: 20}}>Bunga Dapat Berubah Sewaktu-waktu Tanpa Pemberitahuan Lebih Lanjut</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("KetentuanTabel")}
        >
          <Text
            style={{
              alignSelf: "center",
              paddingTop: 8,
              color: "white",
              fontWeight: "900",
            }}
          >
            Ajukan Pinjaman
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ProfileKeuanganGriya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,

},
button: {
  padding: 5,
  margin: 5,
  alignSelf:'flex-end',
  marginLeft:80,
  backgroundColor:'#18C1CD',
  borderRadius:20,
  width:160,
  height:44,
},
input: {
  borderColor: '#1394AD',
  borderWidth: 1.5,
  padding: 8,
  borderRadius: 8,
  marginVertical: 8,
},
text: {
  fontWeight: '800',
},
table: {
  top: 8,
  padding: 15,
  borderColor: '#000',
  marginBottom: 10,
  backgroundColor: 'white',
  borderRadius: 10,
  borderColor: 'grey',
  borderWidth: 1.5,
},
row: {
  flexDirection: 'row',
  borderColor: '#000',
  marginBottom: 15,
  justifyContent: 'space-between',
},
});