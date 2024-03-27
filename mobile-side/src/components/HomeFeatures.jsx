import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Transferdua from "./svg/Transferdua";
import Ewallet from "./svg/Ewallet";
import Pembayaran from "./svg/Pembayaran";
import Pembelian from "./svg/Pembelian";
import Investasi from "./svg/Investasi";
import MyCreditCard from "./svg/MyCreditCard";
import DigitalLoan from "./svg/DigitalLoan";
import LifeGoals from "./svg/LifeGoals";
import Dikado from "./svg/Dikado";
import MobileTunai from "./svg/MobileTunai";
import Rekeningku from "./svg/Rekeningku";
import MenuLain from "./svg/MenuLain";

const HomeFeatures = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <View style={styles.featuresKiri}>
          <TouchableOpacity>
            <Transferdua />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Transfer</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Ewallet></Ewallet>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>E-Wallet</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Pembayaran></Pembayaran>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Pembayaran</Text>
        </View>
        <View style={styles.featuresKanan}>
          <TouchableOpacity>
            <Pembelian></Pembelian>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Pembelian</Text>
        </View>
      </View>
      {/* ============================================ */}
      <View style={styles.tengah}>
        <View style={styles.featuresKiri}>
          <TouchableOpacity>
            <Investasi></Investasi>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Investasi</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <MyCreditCard></MyCreditCard>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>My Credit Card</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity onPress={() => navigation.navigate("DigitalLoan")}>
            <DigitalLoan></DigitalLoan>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Digital Loan</Text>
        </View>
        <View style={styles.featuresKanan}>
          <TouchableOpacity>
            <LifeGoals></LifeGoals>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Life Goals</Text>
        </View>
      </View>
      {/* ===================================== */}
      <View style={styles.tengah}>
        <View style={styles.featuresKiri}>
          <TouchableOpacity>
            <Dikado></Dikado>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Dikado</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <MobileTunai></MobileTunai>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Mobile Tunai</Text>
        </View>
        <View style={styles.features}>
          <TouchableOpacity>
            <Rekeningku></Rekeningku>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Rekeningku</Text>
        </View>
        <View style={styles.featuresKanan}>
          <TouchableOpacity onPress={() => navigation.navigate("SANDBOX")}>
            <MenuLain></MenuLain>
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
    // backgroundColor: "pink"
  },
  featuresKiri: {
    alignItems: "center",
    paddingRight: 12,
    // backgroundColor: "pink"
  },
  featuresKanan: {
    alignItems: "center",
    paddingLeft: 12,
    // backgroundColor: "pink"
  },
  atas: {
    flexDirection: "row",
    justifyContent: "space-between",
    resizeMode: "stretch",
  },
  tengah: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
export default HomeFeatures;
