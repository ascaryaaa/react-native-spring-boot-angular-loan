import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonitoringDetail } from '../reducers/Pinjaman';

const DataDebitur = ({ formId }) => {
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
        <Text style={styles.label}>Nama Debitur</Text>
        <Text style={styles.value}>: {pinjamanToForm.formToUser.nameUser}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nik Debitur</Text>
        <Text style={styles.value}>: {pinjamanToForm.formToUser.nikUser}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Jenis Kelamin:</Text>
        <Text style={styles.value}>: {pinjamanToForm.jenisKelamin}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Tempat Tanggal Lahir</Text>
        <Text style={styles.value}>: {pinjamanToForm.tempatLahir}, {pinjamanToForm.tanggalLahir}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Alamat</Text>
        <Text style={styles.value}>: {pinjamanToForm.alamatKtp}</Text>
      </View>
    </View>
  );
};

export default DataDebitur;

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
