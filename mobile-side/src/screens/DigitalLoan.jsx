import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DigitalLoan = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>DigitalLoan</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PengajuanPinjaman')}>
                <Text>Ajukan Pinjaman</Text>
            </TouchableOpacity>
      </View>
    );
};
export default DigitalLoan;

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