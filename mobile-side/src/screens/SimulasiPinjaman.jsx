import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const SimulasiPinjaman = ({navigation}) => {
    return (
      <View style={styles.container}>

<View style = {styles.navbar}>
  {/* navbar */}
        <TouchableOpacity  onPress={() => navigation.navigate('PengajuanPinjaman')}>      
        <Image
        source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}/>
        </TouchableOpacity>

      <Text>Digital Loan</Text>
      <Image
        source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}/>
        </View>

        <View style={styles.bodyContainer}> 
        <Text style={styles.texttitle}>Simulasi BNI Griya</Text>
        <Image
        source={require("../../../mobile-side/src/assets/img_simulasi.png")}
        style={styles.imgSimulasi}/>
        <Text>Anda dapat mensimulasikan jenis pinjaman sebelum melakukan pengajuan pada halaman ini</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataPemohon')}>
                <Text style = {styles.simulasikan}> Simulasikan</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};
export default SimulasiPinjaman;

const styles = StyleSheet.create({
container: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  marginTop: 40
},
button: {
    padding: 5,
    borderRadius: 5,
    margin: 5,
    alignSelf:'flex-end',
    marginLeft:80,
    backgroundColor:'#18C1CD',
    borderRadius:20,
    width:120,
    height:34
},
navbar:{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  verticalAlign: "top",
  paddingLeft: 20,
  paddingRight: 20,
  height: 48,
},
texttitle:{
  fontSize:18,
  fontWeight:'600'
},
bodyContainer:{
  alignItems: "center",
  width: "100%",
  verticalAlign: "top",
  marginHorizontal:'50',
  // backgroundColor:'red'
},
imgSimulasi:{
  width:228,
  height:228,
  marginTop:16,
  marginBottom:16
},
simulasikan:{
color:'#fff',
textAlign:'center',
fontWeight:'500'
}
})