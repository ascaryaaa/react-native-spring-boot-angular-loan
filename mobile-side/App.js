import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reducers/Index";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import DataDebitur from "./src/screens/DataDebitur";
import SimulasiPinjaman from "./src/screens/SimulasiPinjaman";
import SANDBOX from "./src/screens/SANDBOX";
import DigitalLoan from "./src/screens/DigitalLoan";
import PengajuanPinjaman from "./src/screens/PengajuanPinjaman";
import DataPemohon from "./src/screens/DataPemohon";
import SyaratKetentuan from "./src/screens/SyaratKetentuan";
import Riwayat from "./src/screens/Riwayat";
import NotificationFailed from "./src/screens/NotificationFailed";
import NotificationSuccess from "./src/screens/NotificationSuccess";
import ProfileKeuanganGriya from "./src/screens/ProfileKeuanganGriya";
import ProfileKeuanganFleksiAktif from "./src/screens/ProfileKeuanganFleksiAktif";
import ProfileKeuanganFleksiPensiun from "./src/screens/ProfileKeuanganFleksiPensiun";
import Monitoring from "./src/screens/Monitoring";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsSignedIn(true);
      }
    };

    checkToken();
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Navigator> */}
          {isSignedIn ? (
            // Screens to show when signed in
            <Stack.Screen
              name="DigitalLoan"
              component={DigitalLoan}
              options={{
                headerTintColor: "black",
                headerShown: false,
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                  shadowOpacity: 0,
                  elevation: 0,
                },
              }}
            />
          ) : (
            // Login screen
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTintColor: "black",
                headerShown: false,
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                  shadowOpacity: 0,
                  elevation: 0,
                },
              }}
            />
          )}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTintColor: "black",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTintColor: "black",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          /> */}
          <Stack.Screen
            name="SimulasiPinjaman"
            component={SimulasiPinjaman}
            options={{
              headerTintColor: "black",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="DataDebitur"
            component={DataDebitur}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="SANDBOX"
            component={SANDBOX}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          {/* <Stack.Screen
            name="DigitalLoan"
            component={DigitalLoan}
            options={{
              headerTintColor: "black",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          /> */}
          <Stack.Screen
            name="PengajuanPinjaman"
            component={PengajuanPinjaman}
            options={{
              headerTintColor: "black",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="DataPemohon"
            component={DataPemohon}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="ProfileKeuanganGriya"
            component={ProfileKeuanganGriya}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="ProfileKeuanganFleksiAktif"
            component={ProfileKeuanganFleksiAktif}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="ProfileKeuanganFleksiPensiun"
            component={ProfileKeuanganFleksiPensiun}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="SyaratKetentuan"
            component={SyaratKetentuan}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="Monitoring"
            component={Monitoring}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="Riwayat"
            component={Riwayat}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="NotificationFailed"
            component={NotificationFailed}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="NotificationSuccess"
            component={NotificationSuccess}
            options={{
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
