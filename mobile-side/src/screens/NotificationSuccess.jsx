import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const NotificationSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.isi}>
          <Image
            style={{ width: 160, height: 132 }}
            source={require("../assets/notification_success.png")}
          />
          <Text style={{ fontWeight: "800", paddingTop: 10, fontSize: 16 }}>
            Pinjaman Berhasil Diajukan!
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 12, textAlign: "center" }}>
            Pantau proses pengajuan dan pinjaman pada halaman beranda
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DigitalLoan")}
          >
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 8,
                color: "white",
                fontWeight: "900",
              }}
            >
              Kembali ke Digital Loan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default NotificationSuccess;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor:'red'

    // backgroundColor: "red",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 350,
    height: 350,
    // marginHorizontal: 13,
    borderRadius: 10,
    // backgroundColor: "red",
  },
  button: {
    marginVertical: 20,
    padding: 5,
    margin: 5,
    alignSelf: "center",
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 230,
    height: 44,
  },
  isi: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 32,
  },
});
