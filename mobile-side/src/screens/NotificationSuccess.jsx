import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';

const NotificationSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
          <Image style={{width: 320, height: 260}} source={require('../assets/notification_success.png')}/>
          <Text style={{fontWeight:'800', paddingTop: 10}}>Pinjaman Berhasil Diajukan!</Text>
          <Text>Pantau proses pengajuan dan pinjaman pada</Text>
          <Text>halaman beranda</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitoring')}>
              <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Kembali ke Digital Loan</Text>
          </TouchableOpacity>
          
      </View>
    </View>
  );
};
export default NotificationSuccess;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 380,
    height:450,
    marginHorizontal: 13,
    borderRadius: 10,
},
button: {
    marginVertical: 20,
    padding: 5,
    margin: 5,
    alignSelf:'center',
    backgroundColor:'#18C1CD',
    borderRadius:20,
    width:230,
    height:44,
},
})