import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonitoringDetail } from '../reducers/Pinjaman';

const DetailPinjaman = ({ formId }) => {
  const dispatch = useDispatch();
  const monitoringDetailState = useSelector((state) => state.pinjaman);

  useEffect(() => {
    dispatch(fetchMonitoringDetail(formId));
  }, [dispatch, formId]);

  if (monitoringDetailState.loading) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  if (monitoringDetailState.error) {
    return <Text style={styles.errorText}>Error fetching data: {monitoringDetailState.error}</Text>;
  }

  const { pinjamanToForm } = monitoringDetailState.data;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Harga Rumah</Text>
        <Text style={styles.value}>: {pinjamanToForm.formToUser.nameUser}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Jangka Waktu</Text>
        <Text style={styles.value}>: {pinjamanToForm.jangkaWaktu}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Uang Muka</Text>
        <Text style={styles.value}>: {pinjamanToForm.uangMuka}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Suku Bunga per. Tahun</Text>
        <Text style={styles.value}>: {pinjamanToForm.formToJenis.bungaPinjaman}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total Pinjaman</Text>
        <Text style={styles.value}>: {pinjamanToForm.alamatKtp}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Angsuran Pinjaman per. Bulan</Text>
        <Text style={styles.value}>: {pinjamanToForm.angsuranPerbulan}</Text>
      </View>
    </View>
  );
};

export default DetailPinjaman;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //backgroundColor: '#F4F4F4',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    flex: 2,
  },
  value: {
    flex: 3,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});
