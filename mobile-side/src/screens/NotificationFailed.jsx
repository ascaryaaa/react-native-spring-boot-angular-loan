import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const NotificationFailed = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
            <Image style={{width: 330, height: 280}} source={require('../assets/notification_failed.png')}/>
            <Text style={{fontWeight:'800', paddingTop: 10}}>Terjadi Kesalahan!</Text>
            <Text>Pengajuan anda tidak dapat diproses,</Text>
            <Text>silahkan coba beberapa saat lagi</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DigitalLoan')}>
                <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Kembali ke Digital Loan</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};
export default NotificationFailed;

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