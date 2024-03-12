import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import DataDebitur from "./src/screens/DataDebitur";
import SimulasiPinjaman from "./src/screens/SimulasiPinjaman";
import SANDBOX from "./src/screens/SANDBOX";
import DigitalLoan from "./src/screens/DigitalLoan";
import PengajuanPinjaman from "./src/screens/PengajuanPinjaman";
import DataPemohon from "./src/screens/DataPemohon";
import ProfileKeuangan from "./src/screens/ProfileKeuangan";
import SyaratKetentuan from "./src/screens/SyaratKetentuan";
import Riwayat from "./src/screens/Riwayat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SANDBOX">
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
          name="SimulasiPinjaman"
          component={SimulasiPinjaman}
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
          name="ProfileKeuangan"
          component={ProfileKeuangan}
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
      </Stack.Navigator>
    </NavigationContainer>
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
