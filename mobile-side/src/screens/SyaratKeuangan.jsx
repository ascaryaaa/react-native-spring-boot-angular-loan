import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SyaratKeuangan = () => {
    return (
      <View style={styles.container}>
        <Text>SyaratKeuangan</Text>
      </View>
    );
};
export default SyaratKeuangan;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}
})