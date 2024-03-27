import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const viewsData = [
  { id: 1, title: 'Harga Rumah', content: 'Rp 500.000.000,00' },
  { id: 2, title: 'Jangka Waktu', content: '120 Bulan' },
  { id: 3, title: 'Presentase Uang Muka (%)', content: '10%' },
  { id: 4, title: 'Uang Muka', content: 'Rp 50.000.000,00' },
  { id: 5, title: 'Suku Bunga per Tahun', content: '6,75%' },
];

const DetailPinjaman = () => {
    return (
      <View style={styles.table}>
        {viewsData.map(view => (
          <View key={view.id} style={styles.row}>
            <Text style={{flex: 1, textAlign: 'auto'}}>{view.title}</Text>
            <Text style={{flex: 1, textAlign: 'left'}}>: {view.content}</Text>
          </View>
          ))}
      </View>
    )
}

export default DetailPinjaman;

const styles = StyleSheet.create({
table: {
  top: 8,
  padding: 15,
  borderColor: '#000',
  marginBottom: 10,
},
row: {
  flexDirection: 'row',
  borderColor: '#000',
  marginBottom: 15,
  justifyContent: 'space-between',
},
})