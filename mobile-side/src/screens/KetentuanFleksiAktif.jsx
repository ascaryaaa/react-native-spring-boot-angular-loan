import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import TPAktif from "../components/TPAktif";
import DropdownKFA from "../components/DropdownKFA";

const KetentuanFleksiAktif = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{fontWeight: '600', fontSize: 16}}>Syarat dan Ketentuan</Text>
                <Text style={styles.textheader}>Pengertian</Text>
                <Text style={styles.textcontent}>
                BNI Fleksi Aktif adalah fasilitas kredit tanpa agunan (KTA) yang diberikan kepada Pegawai Aktif yang mempunyai penghasilan tetap (fixed income), untuk keperluan konsumtif yang tidak bertentangan dengan peraturan maupun undang-undang yang berlaku.
                </Text>
                <Text style={styles.textheader}>Kriteria Debitur</Text>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>WNI</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>Berstatus pegawai tetap</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>Nasabah yang gajinya disalurkan melalui BNI</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>Nasabah yang gajinya disalurkan melalui BNI</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>Diperuntukan bagi pegawai minimal level staf (di luar pegawai dasar)</Text>
                    </View>
                </View>
                <Text style={styles.textheader}>Usia</Text>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>Min. 21 tahun</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>•</Text>
                        <Text style={styles.textcontent}>Maks. 55 tahun; atau disesuaikan dengan usia pensiun (saat kredit lunas)</Text>
                    </View>
                </View>
                <Text style={styles.textheader}>Jaminan</Text>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>1.</Text>
                        <Text style={styles.textcontent}>Untuk nasabah yang menyalurkan gajinya melalui BNI : Surat Pernyataan dari nasabah bahwa tidak akan memindahkan penyaluran gaji ke bank lain sampai dengan kredit lunas.</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textcontent}>2.</Text>
                        <Text style={styles.textcontent}>Pemblokiran rekening afiliasi sebesar saldo minimal afiliasi ditambah 1 (satu) kali angsuran (pokok + bunga) sampai dengan kredit dinyatakan lunas oleh BNI.</Text>
                    </View>
                </View>
                <Text style={styles.textheader}>Penghasilan</Text>
                <Text style={styles.textcontent}>Pegawai aktif yang mempunyai penghasilan tetap (fixed income) dan mampu mengangsur, dengan ketentuan :</Text>
                <TPAktif/>
                <DropdownKFA/>
                <View style={{flexDirection: 'row', marginTop: 8, justifyContent: 'flex-end', marginBottom:5}}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('SyaratKetentuan')}>
                        <Text style={{alignSelf: 'center', paddingTop: 8, color: '#757575', fontWeight: '900'}}>Selanjutnya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('SyaratKetentuan')}>
                        <Text style={{alignSelf: 'center', paddingTop: 8, color: 'white', fontWeight: '900'}}>Selanjutnya</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 16,
    },
    textheader: {
        fontWeight: '700',
        fontSize: 14,
        marginTop: 14,
        marginBottom: 10,
    },
    textcontent: {
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'justify',
        lineHeight: 16,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    buttonNext: {
        padding: 5,
        margin: 5,
        backgroundColor:'#18C1CD',
        borderRadius:20,
        width:130,
        height:44,
    },
    buttonBack: {
        padding: 5,
        margin: 5,
        backgroundColor:'#DDEAF3',
        borderRadius:20,
        width:130,
        height:44,
    },
})

export default KetentuanFleksiAktif;