import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import DataDebitur from '../components/DataDebitur';
import DetailPinjaman from '../components/DetailPinjaman';

const Monitoring = ({ navigation}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Monitoring Pinjaman</Text>
        <View style={{flexDirection:'row'}}>
          <View style={styles.ellipse} />
          <Text style={{textAlign: 'right', marginTop: 6, marginLeft: 2}}>Peringatan</Text>
        </View>
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
      <View style={styles.container1}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.detailButton}>
          <Text style={styles.textButton}>Data Debitur</Text>
        </TouchableOpacity>
        {isDropdownOpen && (
          <View style={styles.dropdownContent}>
            <DataDebitur />
          </View>
        )}
      </View>

      <View style={styles.container1}>
        <TouchableOpacity onPress={toggleDropdown1} style={styles.detailButton}>
          <Text style={styles.textButton}>Detail Pinjaman</Text>
        </TouchableOpacity>
        {isDropdownOpen1 && (
          <View style={styles.dropdownContent}>
            <DetailPinjaman />
          </View>
        )}
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
  backgroundColor:'#1394AD',
  borderRadius: 10,
  borderColor: '#1394AD',
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

container1: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},
dropdownContent: {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
  width: '100%',
},
infoText: {
  fontSize: 16,
},
ellipse: {
  width: 15,
  height: 15,
  borderRadius: 50,
  backgroundColor: '#FFC930',
  marginTop: 7,
},
})