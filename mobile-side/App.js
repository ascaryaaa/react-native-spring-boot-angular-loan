import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import DataDebitur from './src/screens/DataDebitur';
import SimulasiPinjaman from './src/screens/SimulasiPinjaman';
import SANDBOX from './src/screens/SANDBOX';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='SANDBOX'
      >
        <Stack.Screen name="Home" 
          component={Home}
          options={{ 
            headerTintColor: 'white',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="Login" 
          component={Login}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="SimulasiPinjaman" 
          component={SimulasiPinjaman}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="DataDebitur" 
          component={DataDebitur}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="SANDBOX" 
          component={SANDBOX}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
