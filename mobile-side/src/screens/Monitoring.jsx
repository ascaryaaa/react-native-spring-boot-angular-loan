import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Monitoring = () => {
    return (
      <View style={styles.container}>
        <Text>Monitoring</Text>
      </View>
    );
};
export default Monitoring;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}
})