import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Buttonjk from '../components/Buttonjk';
import Bniaddress from '../components/Bniaddress';

const DataPemohon = ({navigation}) => {

    const [inputData, setInputData] = useState({
        nama: " ", 
        nik: " ", 
        tempatLahir: " ", 
        tanggalLahir: " ",
        alamat: " ",
        kodePos: " ",
        kelurahan: " ",
        kecamatan: " ",
        npwp: " ",
        alamatBni: " ",
    });

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Nama Lengkap (Sesuai KTP)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Nama Lengkap"
                    value={inputData.nama}
                    onChangeText={(text) => setInputData({...inputData, nama: text})}
                />
                <Text style={styles.text}>NIK</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="NIK"
                    value={inputData.nik}
                    onChangeText={(number) => setInputData({...inputData, nik: number})}
                />
                <Text style={styles.text}>Jenis Kelamin</Text>
                <Buttonjk/>
                <View style={{flexDirection: 'row', top: 5}}>
                    <Text style={{flex: 1, textAlign: 'auto', fontWeight: '800'}}>Tempat Lahir</Text>
                    <Text style={{flex: 1, fontWeight: '800'}}>Tanggal Lahir</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput 
                        style={styles.input1}
                        placeholder="Tempat Lahir"
                        value={inputData.tempatLahir}
                        onChangeText={(text) => setInputData({...inputData, tempatLahir: text})}
                    />
                    <TextInput 
                        style={styles.input2}
                        placeholder="Tanggal Lahir"
                        value={inputData.tanggalLahir}
                        onChangeText={(text) => setInputData({...inputData, tempatLahir: text})}
                    />
                </View>
                <Text style={styles.text}>Alamat (Sesuai KTP)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Alamat"
                    value={inputData.alamat}
                    onChangeText={(text) => setInputData({...inputData, alamat: text})}
                />
                <Text style={styles.text}>Kode Pos</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Kode Pos"
                    value={inputData.kodePos}
                    onChangeText={(text) => setInputData({...inputData, kodePos: text})}
                />
                <Text style={styles.text}>Kelurahan</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Kelurahan"
                    value={inputData.kelurahan}
                    onChangeText={(text) => setInputData({...inputData, kelurahan: text})}
                />
                <Text style={styles.text}>Kecamatan</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Kecamatan"
                    value={inputData.kecamatan}
                    onChangeText={(text) => setInputData({...inputData, kecamatan: text})}
                />
                <Text style={styles.text}>NPWP</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="NPWP"
                    value={inputData.npwp}
                    onChangeText={(number) => setInputData({...inputData, npwp: number})}
                />
                <Text style={styles.text}>Unit Kerja BNI Terdekat</Text>
                <View style={styles.input}>
                    <Bniaddress/>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KetentuanFleksiAktif')}>
                    <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Selanjutnya</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default DataPemohon;

const styles = StyleSheet.create({
container: {
    flex:1,
    margin: 10,
},
button: {
    padding: 5,
    margin: 5,
    alignSelf:'flex-end',
    marginLeft:80,
    backgroundColor:'#18C1CD',
    borderRadius:20,
    width:130,
    height:44,
},
input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
  },
input1: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    borderWidth: 1,
    height:37,
    width: 120,
},
input2: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#1394AD",
    height:37,
    width: 120,
    marginLeft: 75,
},
text: {
    fontWeight: '700',
  },
});