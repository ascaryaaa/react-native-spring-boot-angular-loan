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


const ListPinjaman = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        
      {formDetailsState.loading ? (
        <ActivityIndicator size="large" />
      ) : formDetailsState.error ? (
        <Text>Error fetching forms: {formDetailsState.error}</Text>
      ) : (
        formDetailsState.data?.map((form, index) => (
          form.statusPengajuan === "Diterima" && (
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
          )
        ))
      )}
      </View>
    </View>
  );
};
export default ListPinjaman;

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
