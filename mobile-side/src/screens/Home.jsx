import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import HomeFeatures from "../components/HomeFeatures";
import FooterHome from "../components/FooterHome";
import React,{ useState, useEffect } from "react";
import { LogoutModal } from "../components/LogoutModal";
import Constant from '../utils/Constant';
import { getPromos } from "../reducers/Promos";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../reducers/User";
import { getAccountByHashedId } from '../reducers/Account';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const accountState = useSelector((state) => state.account);
  const dispatchAccount = useDispatch();

  const [hashedId, setHashedId] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const promoState = useSelector((state) => state.promo)
  // const userState = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const fetchHashedId = async () => {
    try {
      const storedHashedId = await AsyncStorage.getItem("hashedId");
      if (storedHashedId) {
        setHashedId(storedHashedId);
        dispatchAccount(getAccountByHashedId(storedHashedId));
      }
    } catch (error) {
      console.error('Error fetching hashed ID from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    // fetchInfo();
    dispatch(getPromos())
    fetchHashedId();
  }, [dispatch, dispatchAccount]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.container}>
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
              <TouchableOpacity onPress={openModal}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require("../../../mobile-side/src/assets/icon_logoutKanan.png")}
                />
              </TouchableOpacity>
              <LogoutModal
                visible={modalVisible}
                onClose={closeModal}
                navigation={navigation}
              ></LogoutModal>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 61, height: 61, marginRight: 21 }}
              source={require("../../../mobile-side/src/assets/icon_fotoProfil.png")}
              //   resizeMode="contain"
            />
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Selamat Datang,</Text>
              {accountState.loading ? (
              <ActivityIndicator />
              ) : accountState.error ? (
              <Text>Error: {accountState.error}</Text>
              ) : (<Text
                style={{
                  fontWeight: "800",
                  fontSize: 16,
                  marginTop: 2,
                }}
              >
                {accountState.data?.accountToUser.nameUser}
              </Text>
              )}
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
              
              {
                  promoState.loading ? <ActivityIndicator/> : promoState?.data?.map(promo => (
                    <TouchableOpacity>
                      <Image
                          key = {promo.idPromo} 
                          style={styles.bannerImage}
                          source={{uri: promo.gambarPromo}}
                      />
                    </TouchableOpacity>
                  ))
                }
            </ScrollView>
            <View style={{marginBottom:190}}/>
          </View>
        </ScrollView>
      </View>
      <FooterHome></FooterHome>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    marginHorizontal: 16,
    marginTop: 40,
    height: "100%",
    // backgroundColor: "red"
    // backgroundColor: "red"
  },
  bg: {
    backgroundColor: "white",
    // height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  banner: {
    justifyContent: "center",
    // backgroundColor: "red"
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
    // backgroundColor: "pink"
  },
});
export default Home;
