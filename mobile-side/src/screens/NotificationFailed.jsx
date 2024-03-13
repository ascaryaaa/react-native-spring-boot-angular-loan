import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NotificationFailed = () => {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
            <Text>Notification</Text>
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
})