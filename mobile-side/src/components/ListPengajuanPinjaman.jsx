import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalDelete from "./ModalDelete";
import { getAccountByHashedId } from '../reducers/Account';
import { fetchFormListById } from '../reducers/Form';


const ListPengajuanPinjaman = ({ navigation }) => {





  const dispatch = useDispatch();
  const formDetailsState = useSelector((state) => state.forms);
  const accountState = useSelector((state) => state.account);

  useEffect(() => {
    const initializeData = async () => {
      const hashedId = await AsyncStorage.getItem("hashedId");
      if (hashedId) {
        await dispatch(getAccountByHashedId(hashedId));
      }
    };
    initializeData();
  }, [dispatch]);

  useEffect(() => {
    // Once the accountState is updated and contains the user's ID, dispatch the fetchFormListById
    const userId = accountState.data?.accountToUser?.idUser;
    if (userId) {
      dispatch(fetchFormListById(userId));
    }
  }, [dispatch, accountState.data?.accountToUser?.idUser]);








  const list = [
    require("../../../mobile-side/src/assets/ban_kejutan1.png"),
    require("../../../mobile-side/src/assets/ban_kejutan2.png"),
  ];
  // const renderItem = ({ item }) => (
  //   <Image style={styles.bannerImage} source={item} />
  // );

  const [modalVisible, setModalVisible] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const [result, setResult] = useState("");

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setDeletedId();
    setModalVisible(true);
  };

  const Data = [
    {
      id: 1,
      img: require("../../../mobile-side/src/assets/img_simulasi_pensiun.png"),
      title: "BNI Fleksi Pensiun",
      date: "10/03/2024",
      period: "6 Bulan",
      amount: "Rp 100.000.000",
      status: "Ditolak",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        
      {formDetailsState.loading ? (
          <ActivityIndicator size="large" />
        ) : formDetailsState.error ? (
          <Text>Error fetching forms: {formDetailsState.error}</Text>
        ) : (
          formDetailsState.data?.map((form, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("Monitoring")}>
              <View style={{backgroundColor: "green"}}>
                <Image source={{ uri: form.formToJenis.gambarJenisPinjaman }} style={styles.image} />
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.info}>
                  <View>
                    <Text style={styles.textHeader}>{form.formToJenis.nameJenisPinjaman}</Text>
                  </View>
                  <Text>Tanggal Pengajuan: {form.tanggalPengajuan}</Text>
                  <Text>Periode Pinjaman: {form.jangkaWaktu} Bulan</Text>
                  <Text>Periode Pinjaman: {form.jumlahPinjaman}</Text>
                  <Text>Status: {form.statusPengajuan}</Text>
                  <View style={styles.cardStatus}>
                    <Text style={styles.textStatus}>{form.statusPengajuan}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
};
export default ListPengajuanPinjaman;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    // width: "95%",
    backgroundColor: 'yellow'
  },
  infoContainer: {
    flexDirection: "column", 
    backgroundColor: "cyan",
    width: "70%",
  },
  info: {
    backgroundColor: "orange",
    marginHorizontal: 10,
    width:"90%",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  bannerImage: {
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 300,
    height: 110,
    resizeMode: "cover",
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: "pink"
  },
  textHeader: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  textContent: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 4,
  },
  textStatus: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
  cardStatus: {
    paddingVertical: 3,
    marginTop: 5,
    borderRadius: 50,
    width: "35%",
    backgroundColor: "#D4352A",
    alignItems: "center",
  }
});
