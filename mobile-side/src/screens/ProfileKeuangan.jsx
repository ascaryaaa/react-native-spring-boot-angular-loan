import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const ProfileKeuangan = ({navigation}) => {

  const [inputData, setInputData] = useState({
    penjualan: " ", 
    labaBersih: " ", 
    piutang: " ", 
    persediaan: " ",
  });

  return (
    <View style={styles.container}>
      <Text>Penjualan Per Tahun (Rp)</Text>
      <TextInput 
        style={styles.input}
        placeholder="Penjualan Per Tahun"
        value={inputData.penjualan}
        onChangeText={(number) => setInputData({...inputData, penjualan: number})}
      />

      <Text>Laba Bersih Per Tahun (Rp)</Text>
      <TextInput 
        style={styles.input}
        placeholder="Laba Bersih Per Tahun"
        value={inputData.labaBersih}
        onChangeText={(number) => setInputData({...inputData, labaBersih: number})}
     />

      <Text>Total Piutang Per Tahun (Rp)</Text>
      <TextInput 
        style={styles.input}
        placeholder="Piutang Per Tahun"
        value={inputData.piutang}
        onChangeText={(number) => setInputData({...inputData, piutang: number})}
      />

      <Text>Total Persediaan Per Tahun (Rp)</Text>
      <TextInput 
        style={styles.input}
        placeholder='Persediaan Per Tahun'
        value={inputData.persediaan}
        onChangeText={(number) => setInputData({...inputData, persediaan: number})}
      />

      <TouchableOpacity onPress={() => navigation.navigate('SyaratKetentuan')}>
        <Text style={styles.button}>Selanjutnya</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProfileKeuangan;

const styles = StyleSheet.create({
container: {
    flex:1,
    top: 20,
},
button: {
    backgroundColor:'lightgrey',
    padding: 5,
    borderRadius: 5,
    margin: 5,
},
input: {
  borderColor: 'grey',
  borderWidth: 1,
  padding: 8,
  borderRadius: 8,
  marginVertical: 8,
}
});