import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ProfileKeuanganFleksiPensiun = ({navigation}) => {

    const [inputData, setInputData] = useState({
        penghasilanBersih: " ", 
        jumlahPinjaman: " ", 
        jangkaWaktu: " ",
    });

    const data = [
        { id: 1, title: "Penghasilan Bersih per Bulan", content: "Rp 5.000.000,00" },
        { id: 2, title: "Jangka Waktu", content: "120 Bulan" },
        { id: 3, title: "Suku Bunga per Tahun", content: "10,74%" },
        { id: 4, title: "Total Pinjaman", content: "Rp 50.000.000,00" },
        { id: 5, title: "Angsuran Pinjaman per Bulan", content: "Rp 2.167.445,22" },
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={{fontWeight: '600', fontSize: 16, marginBottom: 13}}>Profil Keuangan</Text>
                <Text style={styles.text}>Penghasilan Bersih per. Bulan</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Penghasilan Bersih per. Bulan"
                    value={inputData.penghasilanBersih}
                    onChangeText={(number) => setInputData({...inputData, penghasilanBersih: number})}
                />
                <Text style={styles.text}>Jumlah Pinjaman yang Diajukan</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Jumlah Pinjaman yang Diajukan"
                    value={inputData.jumlahPinjaman}
                    onChangeText={(number) => setInputData({...inputData, jumlahPinjaman: number})}
                />
                <Text style={styles.text}>Jangka Waktu</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Jangka Waktu"
                    value={inputData.jangkaWaktu}
                    onChangeText={(number) => setInputData({...inputData, jangkaWaktu: number})}
                />
                <Text style={{ marginBottom: 10, fontSize: 10 }}>*Maksimal 180 Bulan</Text>
                <Text style={styles.text}>Bunga Pinjaman</Text>
                <TextInput 
                    style={styles.input}
                    value='10,74%'
                />
                <View style={styles.container1}>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
                        <Text style={styles.textButton}>Simulasi Angsuran</Text>
                    </TouchableOpacity>
                    {isDropdownOpen && (
                    <View style={styles.dropdownContent}>
                        <Text style={styles.text}>Hasil</Text>
                        {data.map((view) => (
                        <View key={view.id} style={styles.row}>
                            <Text style={{ flex: 1, textAlign: 'left', fontWeight: '300' }}>{view.title}</Text>
                            <Text style={{ flex: 1,textAlign: 'right', fontWeight: '600'}}>{view.content}</Text>
                        </View>
                        ))}
                        <Text style={{fontWeight: '300', marginVertical: 20, fontWeight: '500'}}>Simulasi menggunakan suku bunga yang berlaku saat ini</Text>
                    </View>
                    )}
                </View>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('DataPemohon')}>
                    <Text style={{textAlign: 'center', paddingTop: 12, color: 'white', fontWeight: '700', fontSize: 16}}>Ajukan Pinjaman</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProfileKeuanganFleksiPensiun;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 8,
    },
    container1: {
        alignItems: "center",
        justifyContent: "center",
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
      marginTop: 10,
    },
    button1: {
        marginTop: 10,
        backgroundColor: '#18C1CD',
        borderRadius: 20,
        width: 390,
        height: 44,
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
    dropdownContent: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '100%',
    },
    textButton: {
        alignSelf: "center",
        paddingTop: 8,
        color: "white",
        fontWeight: "700",
        fontSize: 14,
    },
    text: {
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        borderColor: '#000',
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    });