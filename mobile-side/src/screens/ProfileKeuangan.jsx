import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileKeuangan = () => {
    return (
      <View style={styles.container}>
        <Text>ProfileKeuangan</Text>
      </View>
    );
};
export default ProfileKeuangan;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}
})