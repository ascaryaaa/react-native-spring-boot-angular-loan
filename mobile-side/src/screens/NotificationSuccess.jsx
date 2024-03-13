import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Notification = () => {
    return (
      <View style={styles.container}>
        <Text>Notification</Text>
      </View>
    );
};
export default Notification;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}
})