import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const HomeFeatures = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_ewallet.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Transfer</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_transfer.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>E-Wallet</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_pembayaran.png")}
              style={{ width: 55, height: 55 }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Pembayaran</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_pembelian.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Pembelian</Text>
        </View>
      </View>
      {/* ============================================ */}
      <View style={styles.tengah}>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_investasi.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Investasi</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_myCC.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>My Credit Card</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity onPress={() => navigation.navigate("DigitalLoan")}>
            <Image
              source={require("../../../mobile-side/src/assets/icon_digitalLoan.png")}
              style={{ width: 55, height: 55 }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Digital Loan</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_lifeGoals.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Life Goals</Text>
        </View>
      </View>
      {/* ===================================== */}
      <View style={styles.tengah}>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_dikado.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Dikado</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_mobileTunai.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Mobile Tunai</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_rekeningku.png")}
              style={{ width: 55, height: 55 }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Rekeningku</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Image
              source={require("../../../mobile-side/src/assets/icon_menuLain.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Menu Lain</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  features: {
    alignItems: "center",
    // backgroundColor: "yellow",
    width: 90,
  },
  atas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tengah: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
export default HomeFeatures;
