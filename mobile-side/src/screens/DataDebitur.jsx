import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const viewsData = [
  { id: 1, title: 'Nama Debitur', content: 'Wahyu Khumairoh' },
  { id: 2, title: 'No. KTP', content: '123456789' },
  { id: 3, title: 'Jenis Kelamin', content: 'Wanita' },
  { id: 4, title: 'Tempat, Tanggal Lahir', content: 'Kediri, 6 Juli 1998' },
  { id: 5, title: 'Alamat', content: 'Kras, Kediri' },
];

const DataDebitur = () => {
    return (
      <View style={styles.table}>
        {viewsData.map(view => (
          <View key={view.id} style={styles.row}>
            <Text style={{flex: 1, textAlign: 'auto'}}>{view.title}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>:</Text>
            <Text style={{flex: 1, textAlign: 'left'}}>{view.content}</Text>
          </View>
          ))}
      </View>
    )
}

export default DataDebitur;

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