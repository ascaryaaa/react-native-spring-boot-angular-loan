import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PengajuanPinjaman = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>PengajuanPinjaman</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text>Jenis 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text>Jenis 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text>Jenis 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text>Jenis 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text>Jenis 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text>Jenis 6</Text>
            </TouchableOpacity>
      </View>
    );
};
export default PengajuanPinjaman;

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