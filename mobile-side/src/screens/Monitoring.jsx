import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator} from 'react-native';
import DataDebitur from '../components/DataDebitur';
import DetailPinjaman from '../components/DetailPinjaman';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonitoringDetail } from '../reducers/Pinjaman';

const Monitoring = ({ navigation, route }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const { formId } = route.params;
  const dispatch = useDispatch();
  const monitoringDetailState = useSelector((state) => state.pinjaman);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  useEffect(() => {
    dispatch(fetchMonitoringDetail(formId));
  }, [dispatch, formId]);

  useEffect(() => {
    console.log("##########################",monitoringDetailState);
  }, [monitoringDetailState]);

  return (
    <View style={styles.bg}>
      <View style={styles.shadow}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Digital Loan</Text>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Monitoring Pinjaman</Text>
          <View style={{flexDirection:'row'}}>
            <View style={styles.ellipse} />
            <Text style={{textAlign: 'right', marginTop: 3, marginLeft: 2}}>Peringatan</Text>
          </View>
        </View>
        <View style={styles.table}>
          <Text style={{color: 'white', fontWeight: '700'}}>Sisa Pinjaman</Text>
          <Text style={{color: 'white', fontSize: 28, fontWeight: '700', marginTop: 5}}>
            Rp. {monitoringDetailState.data ? monitoringDetailState.data.sisaTagihan : "-"}
          </Text>
          <Text style={{color: 'white', marginTop: 8}}>Pembayaran 7 hari lagi</Text>
          <Text style={{color: 'white'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
          <View style={styles.row}>
            <Text style={{fontSize: 15, marginTop: 8, color: 'white', fontWeight: '700'}}>BNI Griya</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Riwayat')}>
              <Text style={{textAlign: 'center', color: '#F68310', fontWeight: '700' }}>Riwayat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container1}>
          <TouchableOpacity onPress={toggleDropdown} style={styles.detailButton}>
            <Text style={styles.textButton}>Data Debitur</Text>
            <Image
              source={require("../../../mobile-side/src/assets/icon_arrowDown.png")}
              style={{ marginTop: 4 }}
            />
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.dropdownContent}>
              <DataDebitur formId={formId}/>
            </View>
          )}
        </View>

        <View style={styles.container1}>
          <TouchableOpacity onPress={toggleDropdown1} style={styles.detailButton}>
            <Text style={styles.textButton}>Detail Pinjaman</Text>
            <Image
              source={require("../../../mobile-side/src/assets/icon_arrowDown.png")}
              style={{ marginTop: 4 }}
            />
          </TouchableOpacity>
          {isDropdownOpen1 && (
            <View style={styles.dropdownContent}>
              <DetailPinjaman formId={formId}/>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default Monitoring;

const styles = StyleSheet.create({
container: {
  flex:1,
  marginHorizontal: 16,
  marginTop: 10,
},
bg: {
  backgroundColor: "white",
  height: "100%",
  // width: "100%",
},
navbar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  verticalAlign: "top",
  paddingTop: 60,
  padding: 12,
  backgroundColor: "#FFF",
  // marginBottom: 24,
  // backgroundColor: "red"
},
shadow: {
  shadowColor: "#ddd",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 15,
},
table: {
  marginTop: 8,
  padding: 15,
  marginBottom: 8,
  backgroundColor:'#1394AD',
  borderRadius: 10,
  borderColor: '#1394AD',
  width: '100%'
},
button: {
  padding: 7,
  backgroundColor:'white',
  borderRadius:20,
  width: 90,
  height: 34,
},
row: {
  flexDirection: 'row',
  borderColor: '#000',
  marginBottom: 15,
  justifyContent: 'space-between',
},
status: {
  flexDirection: 'row',
  marginTop: 8,
},
detailButton: {
  backgroundColor: "#F68310",
  padding: 10,
  borderRadius: 5,
  marginBottom: 8,
  width: "100%",
  marginTop: 8,
  flexDirection: "row",
  justifyContent: "space-between",
},
textButton: {
  color: 'white',
  fontWeight: '600',
  fontSize: 14,
},
container1: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},
dropdownContent: {
  // backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: 10,
  borderRadius: 5,
  // marginTop: 10,
  width: '100%',
},
infoText: {
  fontSize: 16,
},
ellipse: {
  width: 15,
  height: 15,
  borderRadius: 50,
  backgroundColor: '#FFC930',
  marginTop: 4,
},
})