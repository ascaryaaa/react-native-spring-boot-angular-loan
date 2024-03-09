import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SimulasiPinjaman = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>SimulasiPinjaman</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataPemohon')}>
                <Text>Lanjutkan Pengajuan</Text>
            </TouchableOpacity>
      </View>
    );
};
export default SimulasiPinjaman;

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