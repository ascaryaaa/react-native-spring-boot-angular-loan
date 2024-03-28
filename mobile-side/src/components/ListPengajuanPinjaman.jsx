import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalDelete from "./ModalDelete";
import { getAccountByHashedId } from '../reducers/Account';
import { fetchFormListById, softDeleteForm } from '../reducers/Form';

const ListPengajuanPinjaman = ({ navigation }) => {
  const dispatch = useDispatch();
  const formDetailsState = useSelector((state) => state.forms);
  const accountState = useSelector((state) => state.account);

  const [showModal, setShowModal] = useState(false);
  const [formIdToDelete, setFormIdToDelete] = useState(null);

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
    const userId = accountState.data?.accountToUser?.idUser;
    if (userId) {
      dispatch(fetchFormListById(userId));
    }
  }, [dispatch, accountState.data?.accountToUser?.idUser]);

  const handleSoftDelete = async () => {
    if (formIdToDelete) {
      dispatch(softDeleteForm(formIdToDelete));
    }
  };

  const openModal = (formId) => {
    setFormIdToDelete(formId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        {formDetailsState.loading ? (
          <ActivityIndicator size="large" />
        ) : formDetailsState.error ? (
          <Text>Error fetching forms: {formDetailsState.error}</Text>
        ) : (
          formDetailsState.data
            ?.filter(form => !form.deleted) // Filter out forms where deleted is true
            .map((form, index) => (
              (form.statusPengajuan === "Diproses" || form.statusPengajuan === "Ditolak") && (
                <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("Monitoring")}>
                  <View style={{ backgroundColor: "green" }}>
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
                      <View style={[styles.cardStatus, { backgroundColor: form.statusPengajuan === "Ditolak" ? "#D4352A" : "#757575" }]}>
                        <Text style={styles.textStatus}>{form.statusPengajuan}</Text>
                      </View>
                      {form.statusPengajuan === "Ditolak" && ( // Render soft delete button if status is Ditolak
                        <TouchableOpacity onPress={() => openModal(form.idFormPengajuanPinjaman)}>
                          <Text style={styles.softDeleteButton}>Soft Delete</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )
            ))
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <ModalDelete closeModal={closeModal} handleSoftDelete={handleSoftDelete} />
      </Modal>
    </View>
  );
};

export default ListPengajuanPinjaman;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    //backgroundColor: "green"
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
    //backgroundColor: 'yellow'
  },
  infoContainer: {
    flexDirection: "column", 
    //backgroundColor: "cyan",
    width: "70%",
  },
  info: {
    //backgroundColor: "orange",
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
    //backgroundColor: "pink"
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

