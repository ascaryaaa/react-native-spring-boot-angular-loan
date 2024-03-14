import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const ProfileKeuanganGriya = ({navigation}) => {

  const [inputData, setInputData] = useState({
    hargaRumah: " ", 
    penghasilanBersih: " ", 
    jumlahPinjaman: " ", 
    jangkaWaktu: " ",
    uangMuka: " ",
  });

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '800'}}>Harga Rumah</Text>
      <TextInput 
        style={styles.input}
        placeholder="Harga Rumah"
        value={inputData.hargaRumah}
        onChangeText={(number) => setInputData({...inputData, hargaRumah: number})}
      />

      <Text style={{fontWeight: '800'}}>Jangka Waktu</Text>
      <TextInput 
        style={styles.input}
        placeholder="Jangka Waktu"
        value={inputData.jangkaWaktu}
        onChangeText={(number) => setInputData({...inputData, jangkaWaktu: number})}
      />

      <Text style={{fontWeight: '800'}}>Presentase Uang Muka (%)</Text>
      <TextInput 
        style={styles.input}
        placeholder="Presentase Uang Muka"
        value={inputData.uangMuka}
        onChangeText={(number) => setInputData({...inputData, uangMuka: number})}
      />

      <Text style={{fontWeight: '800'}}>Penghasilan Bersih per. Bulan</Text>
      <TextInput 
        style={styles.input}
        placeholder="Penghasilan Bersih per. Bulan"
        value={inputData.penghasilanBersih}
        onChangeText={(number) => setInputData({...inputData, penghasilanBersih: number})}
     />

      <Text style={{fontWeight: '800'}}>Bunga Pinjaman</Text>
      <TextInput 
        style={styles.input}
        placeholder='Persediaan Per Tahun'
        value='6,75%'
      />
      <Text>*Maksimal 360 Bulan</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SyaratKetentuan')}>
        <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Simulasi Angsuran</Text>
      </TouchableOpacity>
      <Text>Hasil :</Text>
      <Text>Maksimal Kredit : Rp. 450.000.000,00</Text>
      <Text>Uang Muka : Rp. 50.000.000,00</Text>
      <Text>Angsuran Kredit Perbulan : Rp. 3.421.638,00</Text>
      <Text style={{fontWeight: '500', marginVertical: 20}}>Bunga Dapat Berubah Sewaktu-waktu Tanpa Pemberitahuan Lebih Lanjut</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SyaratKetentuan')}>
        <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Ajukan Pinjaman</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProfileKeuanganGriya;

const styles = StyleSheet.create({
container: {
    flex:1,
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
});