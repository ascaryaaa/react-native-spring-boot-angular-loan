import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Login = ({navigation}) => {
    
    return (
      <View style={styles.container}>
        <Image
        source={require("../../../mobile-side/src/assets/bgawal.png")}
        style={styles.background}
      />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DigitalLoan')}>
                <Text>Login</Text>
            </TouchableOpacity>
      </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: "100%",
        height:"100%"
      },
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