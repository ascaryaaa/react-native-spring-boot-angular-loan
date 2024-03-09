import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SyaratKetentuan = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>SyaratKetentuan</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DigitalLoan')}>
            <Text>Selanjutnya</Text>
          </TouchableOpacity>
      </View>
    );
};
export default SyaratKetentuan;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
},
button: {
    backgroundColor:'lightgrey',
    padding: 5,
    borderRadius: 5,
    margin: 5,
}
})