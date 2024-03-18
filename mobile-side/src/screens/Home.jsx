import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import FontLoader from "./FontLoader";
import HomeFeatures from "../components/HomeFeatures";

const Home = ({ navigation }) => {
  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  const renderItem = ({ item }) => (
    <Image style={styles.bannerImage} source={item} />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={{ width: 86, height: 32 }}
            source={require("../../../mobile-side/src/assets/icon_logoBNI.png")}
            resizeMode="contain"
          />
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 32, height: 32, marginRight: 8 }}
              source={require("../../../mobile-side/src/assets/icon_notification.png")}
            />
            <Image
              style={{ width: 32, height: 32 }}
              source={require("../../../mobile-side/src/assets/icon_logoutKanan.png")}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 61, height: 61, marginRight: 21 }}
            source={require("../../../mobile-side/src/assets/icon_fotoProfil.png")}
            //   resizeMode="contain"
          />
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={{ fontSize: 16 }}>Selamat Datang,</Text>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 16,
                marginTop: 2,
              }}
            >
              Wahyu Khumairoh
            </Text>
          </View>
        </View>
        <Image
          style={{ width: "100%", height: 113, marginTop: 24 }}
          source={require("../../../mobile-side/src/assets/card_home.png")}
          resizeMode="stretch"
        />
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 103, height: 30 }}
            source={require("../../../mobile-side/src/assets/icon_poinHome.png")}
          />
          <Image
            style={{ width: 103, height: 30 }}
            source={require("../../../mobile-side/src/assets/icon_aturMenu.png")}
            resizeMode="stretch"
          />
        </View>
        <HomeFeatures navigation={navigation}></HomeFeatures>
        <View style={styles.banner}>
          <Text style={styles.kejutan}>Promo & Informasi</Text>
          <ScrollView horizontal={true}>
            <FlatList
              data={list}
              numColumns={2}
              renderItem={renderItem}
            ></FlatList>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
    // backgroundColor: "red",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  banner: {
    justifyContent: "center",
    // alignItems: "center",
  },
  kejutan: {
    fontWeight: "600",
    textAlign: "left",
    fontSize: 18,
    marginTop: 20,
  },
  bannerImage: {
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 300,
    height: 110,
    resizeMode: "cover",
  },
});
export default Home;
