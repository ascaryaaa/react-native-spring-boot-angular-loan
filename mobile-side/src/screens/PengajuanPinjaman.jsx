import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';

const PengajuanPinjaman = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style = {styles.navbar}>
        <TouchableOpacity  onPress={() => navigation.navigate('DigitalLoan')}>
                
        <Image
        source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
      />
            </TouchableOpacity>
      <Text>Digital Loan</Text>
      <Image
        source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        // style={styles.amico}
      />
        </View>


        
        <View style={styles.headertxt}>
        <Text style={styles.texttitle}>Pengajuan Pinjaman</Text>
        <Text style={styles.textbody}>BNI memiliki berbagai macam produk pinjaman yang dapat disesuaikan dengan kebutuhan</Text>
        </View>

        <View style ={styles.jeniscontainer}>
            <View style ={styles.jenisbody}>
                <Image source={require("../../../mobile-side/src/assets/icon_housecf.png")}/>
                <Text style ={styles.textJenisPinjaman}>BNI Griya</Text>
                <TouchableOpacity style={styles.buttonJenis} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text style={styles.textPilih}>Pilih</Text>
            </TouchableOpacity>
            </View>

            <View style ={styles.jenisbody}>
                <Image source={require("../../../mobile-side/src/assets/icon_shopping.png")}/>
                <Text style ={styles.textJenisPinjaman}>BNI Flexi Aktif</Text>
                <TouchableOpacity style={styles.buttonJenis} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text style={styles.textPilih}>Pilih</Text>
            </TouchableOpacity>
            </View>

            <View style ={styles.jenisbody}>
                <Image source={require("../../../mobile-side/src/assets/icon_oldman.png")}/>
                <Text style ={styles.textJenisPinjaman}>BNI Fleksi Pensiun</Text>
                <TouchableOpacity style={styles.buttonJenis} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text style={styles.textPilih}>Pilih</Text>
            </TouchableOpacity>
            </View>

            <View style ={styles.jenisbody}>
                <Image source={require("../../../mobile-side/src/assets/icon_shop.png")}/>
                <Text style ={styles.textJenisPinjaman}>Kredit Usaha Rakyat BNI</Text>
                <TouchableOpacity style={styles.buttonJenis} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text style={styles.textPilih}>Pilih</Text>
            </TouchableOpacity>
            </View>

            <View style ={styles.jenisbody}>
                <Image source={require("../../../mobile-side/src/assets/icon_calcudocu.png")}/>
                <Text style ={styles.textJenisPinjaman}>Kredit Wirausaha</Text>
                <TouchableOpacity style={styles.buttonJenis} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text style={styles.textPilih}>Pilih</Text>
            </TouchableOpacity>
            </View>

            <View style ={styles.jenisbody}>
                <Image source={require("../../../mobile-side/src/assets/icon_office.png")}/>
                <Text style ={styles.textJenisPinjaman}> Kredit Produktif {'>'} 1 M</Text>
                <TouchableOpacity style={styles.buttonJenis} onPress={() => navigation.navigate('SimulasiPinjaman')}>
                <Text style={styles.textPilih}>Pilih</Text>
            </TouchableOpacity>
            </View>
        </View>


        </View>
        
      
    );
};
export default PengajuanPinjaman;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40
},
button: {
    backgroundColor:'lightgrey',
    padding: 5,
    borderRadius: 5,
    margin: 5,
},
navbar:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    verticalAlign: "top",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48
},
headertxt:{
    paddingLeft: 15,
    paddingRight: 15,
    marginTop:30,
    marginBottom:20,
},
texttitle:{
    fontSize:18,
    fontWeight:'600'
},
textbody:{
    fontSize:13,
    paddingTop: 10,
    paddingBottom:25,
    paddingRight:20
    
},
jeniscontainer:{
    paddingLeft:15,
    paddingRight:15,
    width:'100%'
},
jenisbody:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:'#1394AD',
    borderRadius:8,
    width: 368,
    height:64,
    marginLeft:4,
    marginTop:14
},
textJenisPinjaman:{
    color:'white',
    fontSize:13,
    fontWeight:'500'
},
buttonJenis:{
    backgroundColor:'white',
    borderRadius:8,
    width:70,
    height:26
},
textPilih:{
    color:'#F68310',
    textAlign:'center',
    fontSize: 14,
    fontWeight:'500'
}
})