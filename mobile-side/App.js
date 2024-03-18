import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reducers/Index";
import Login from "./src/screens/Login";
// import DataDebitur from "./src/screens/DataDebitur";
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
import SimulasiGriya from "./src/screens/SimulasiGriya";
import SimulasiFleksiAktif from "./src/screens/SimulasiFleksiAktif";
import SimulasiFleksiPensiun from "./src/screens/SimulasiFleksiPensiun";
import { LoginModal } from "./src/screens/LoginModal";
import HomeMonitoring from "./src/screens/HomeMonitoring";
import KetentuanGriya from "./src/screens/KetentuanGriya";
import KetentuanFleksiAktif from "./src/screens/KetentuanFleksiAktif";
import Home from "./src/screens/Home";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { LoginModal } from "./src/screens/LoginModal";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
          <Stack.Screen
            name="HomeMonitoring"
            component={HomeMonitoring}
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
            name="Monitoring"
            component={Monitoring}
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
            name="LoginModal"
            component={LoginModal}
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
            name="SimulasiGriya"
            component={SimulasiGriya}
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
            name="SimulasiFleksiAktif"
            component={SimulasiFleksiAktif}
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
            name="SimulasiFleksiPensiun"
            component={SimulasiFleksiPensiun}
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
          /> */}
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
          <Stack.Screen
            name="KetentuanGriya"
            component={KetentuanGriya}
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
            name="KetentuanFleksiAktif"
            component={KetentuanFleksiAktif}
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
