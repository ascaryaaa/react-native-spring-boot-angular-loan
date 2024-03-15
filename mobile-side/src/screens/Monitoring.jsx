import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image} from 'react-native';

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
            <View style={styles.ellipse} />
            <Text style={{marginLeft: 5}}>Telat Bayar</Text>
            <View style={styles.ellipse1} />
            <Text style={{marginLeft: 5}}>Peringatan</Text>
            <View style={styles.ellipse2} />
            <Text style={{marginLeft: 5}}>Terbayar</Text>
          </View>
        </View>
        <View style={styles.detailButton}>
          <Text style={styles.textButton}>Data Debitur</Text>
        </View>
        <View style={styles.detailButton}>
          <Text style={styles.textButton}>Detail Pinjaman</Text>
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
  marginTop: 8,
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
ellipse: {
  marginTop: 1,
  width: 14,
  height: 14,
  borderRadius: 20,
  backgroundColor: '#D4352A',
},
ellipse1: {
  marginTop: 1,
  width: 14,
  height: 14,
  borderRadius: 20,
  backgroundColor: '#FFC930',
  marginLeft: 40,
},
ellipse2: {
  marginTop: 1,
  width: 14,
  height: 14,
  borderRadius: 20,
  backgroundColor: '#04C300',
  marginLeft: 40,
},
detailButton: {
  marginTop: 15,
  padding: 15,
  marginBottom: 8,
  backgroundColor:'#F68310',
  borderRadius: 10,
  borderColor: '#F68310',
  width: '100%'
},
textButton: {
  color: 'white',
  fontWeight: '600',
  fontSize: 14,
},
})