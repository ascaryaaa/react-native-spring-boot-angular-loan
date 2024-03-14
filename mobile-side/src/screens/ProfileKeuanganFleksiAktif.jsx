import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const ProfileKeuanganFleksiAktif = ({navigation}) => {

    const [inputData, setInputData] = useState({
        penghasilanBersih: " ", 
        jumlahPinjaman: " ", 
        jangkaWaktu: " ",
    });

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: '800'}}>Penghasilan Bersih per. Bulan</Text>
            <TextInput 
                style={styles.input}
                placeholder="Penghasilan Bersih per. Bulan"
                value={inputData.penghasilanBersih}
                onChangeText={(number) => setInputData({...inputData, penghasilanBersih: number})}
            />
            <Text style={{fontWeight: '800'}}>Jumlah Pinjaman yang Diajukan</Text>
            <TextInput
                style={styles.input}
                placeholder="Jumlah Pinjaman yang Diajukan"
                value={inputData.jumlahPinjaman}
                onChangeText={(number) => setInputData({...inputData, jumlahPinjaman: number})}
            />
            <Text style={{fontWeight: '800'}}>Jangka Waktu</Text>
            <TextInput 
                style={styles.input}
                placeholder="Jangka Waktu"
                value={inputData.jangkaWaktu}
                onChangeText={(number) => setInputData({...inputData, jangkaWaktu: number})}
            />
            <Text>*Maksimal 60 Bulan</Text>
            <Text style={{fontWeight: '800'}}>Bunga Pinjaman</Text>
            <TextInput 
                style={styles.input}
                placeholder='Persediaan Per Tahun'
                value='12,75%'
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SyaratKetentuan')}>
                <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Simulasi Angsuran</Text>
            </TouchableOpacity>

            <Text>Hasil : </Text>
            <Text>Nominal Pinjaman : Rp. 100.000.000,00</Text>
            <Text>Jangka Waktu : 24 Bulan</Text>
            <Text>Angsuran Kredit per. Bulan : Rp. 4.726.516,00</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SyaratKetentuan')}>
                <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Ajukan Pinjaman</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileKeuanganFleksiAktif;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 8,
    },
    button: {
      padding: 5,
      margin: 5,
      alignSelf:'flex-end',
      marginLeft:80,
      backgroundColor:'#18C1CD',
      borderRadius:20,
      width:160,
      height:44,
    },
    input: {
        borderColor: '#1394AD',
        borderWidth: 1.5,
        padding: 8,
        borderRadius: 8,
        marginVertical: 8,
    },
    });