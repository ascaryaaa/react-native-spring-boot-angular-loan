import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const transactionHistory =[
  {id: 1, date: '25 Maret 2024',time: '00.01 WIB',title: 'Auto Grab Fund', amount: '-Rp. 540.669,55'},
  {id: 2, date: '22 Maret 2024',time: '03.59 WIB', title: '6643847934636TF', amount: '-Rp. 1.556.889,99'},
]

const Riwayat = () => {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: '600', fontSize: 16, marginBottom: 5}}>Riwayat</Text>
          {transactionHistory.map(view => (
            <View key={view.id}>
              <View style={{top: 10, height: 32, width: 390, backgroundColor: '#F68310', padding: 8}}>
                <Text>{view.date}</Text>
              </View>
              <View style={{flexDirection: 'row', top: 10, padding: 8, justifyContent: 'space-between'}}>
                <View style={styles.row}>
                  <Text>{view.title}</Text>
                  <Text style={{fontSize: 10}}>{view.time}</Text>
                </View>
                <Text>{view.amount}</Text>
              </View>
            </View>
            ))
          }
        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign: 'center', paddingTop: 12, color: 'white', fontWeight: '700', fontSize: 16}}>Download Riwayat</Text>
        </TouchableOpacity>
      </View>
    );
};
export default Riwayat;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 8,
  },
  table: {
    top: 8,
    padding: 15,
    borderColor: '#000',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'column',
    borderColor: '#000',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#18C1CD',
    borderRadius: 20,
    width: 390,
    height: 44,
},
})