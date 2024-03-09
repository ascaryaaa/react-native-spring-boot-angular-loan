import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileKeuangan = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>ProfileKeuangan</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SyaratKetentuan')}>
            <Text>Selanjutnya</Text>
          </TouchableOpacity>
      </View>
    );
};
export default ProfileKeuangan;

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