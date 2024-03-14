import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const Monitoring = ({ navigation}) => {
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>Monitoring Pinjaman</Text>
          <Text style={{textAlign: 'right', marginTop: 5}}>Peringatan</Text>
        </View>
        <View style={styles.table}>
          <Text style={{color: 'white', fontWeight: '700'}}>Sisa Pinjaman</Text>
          <Text style={{color: 'white', fontSize: 28, fontWeight: '700', marginTop: 5}}>Rp. 248.000.000,00</Text>
          <Text style={{color: 'white', marginTop: 8}}>Pembayaran 7 hari lagi</Text>
          <Text style={{color: 'white'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
          <View style={styles.row}>
            <Text style={{fontSize: 15, marginTop: 8, color: 'white', fontWeight: '700'}}>BNI Griya</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Riwayat')}>
              <Text style={{textAlign: 'center', color: '#F68310', fontWeight: '700' }}>Riwayat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: '600', fontSize: 18}}>Keterangan</Text>
          <View style={styles.status}>
            <Text>Telat Bayar</Text>
            <Text style={{marginLeft: 40}}>Peringatan</Text>
            <Text style={{marginLeft: 40}}>Terbayar</Text>
          </View>
        </View>
      </ScrollView>
    );
};
export default Monitoring;

const styles = StyleSheet.create({
container: {
    flex:1,
    padding: 10,
    marginTop: 5,
},
table: {
  top: 8,
  padding: 15,
  marginBottom: 8,
  backgroundColor:'#18C1CD',
  borderRadius: 10,
  borderColor: '#18C1CD',
  width: '100%'
},
button: {
  padding: 7,
  backgroundColor:'white',
  borderRadius:20,
  width: 90,
  height: 34,
},
row: {
  flexDirection: 'row',
  borderColor: '#000',
  marginBottom: 15,
  justifyContent: 'space-between',
},
status: {
  flexDirection: 'row',
  marginTop: 8,
},
})