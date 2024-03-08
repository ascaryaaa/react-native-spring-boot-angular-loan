import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
      </View>
    );
};
export default Login;

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
}
})