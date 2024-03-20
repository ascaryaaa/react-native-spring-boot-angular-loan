import { StyleSheet, Text, View } from "react-native"

const InfoKFA = () => {
    return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={{width:'50%'}}>
                <Text style={styles.textHeader}>Suku Bunga</Text>
            </View>
            <View style={{width:'50%'}}>
                <Text style={styles.textContent}>Mengikuti Program atau ketentuan BNI Fleksi Aktif yang berlaku</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={{width:'50%'}}>
                <Text style={styles.textHeader}>Maksimum Kredit</Text>
            </View>
            <View style={{width:'50%'}}>
                <Text style={styles.textContent}>Minimum sebesar Rp. 5 Juta dan maksimum sebesar Rp. 500 Juta.</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={{width:'50%'}}>
                <Text style={styles.textHeader}>Jangka Waktu</Text>
            </View>
            <View style={{width:'50%'}}>
                <Text style={styles.textContent}>Maksimal 15 (lima belas) tahun.</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={{width:'50%'}}>
                <Text style={styles.textHeader}>Biaya-Biaya</Text>
            </View>
            <View style={{width:'50%'}}>
                <Text style={styles.textContent}>Sesuai ketentuan yang berlaku</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={{width:'50%'}}>
                <Text style={styles.textHeader}>Non-Jabodetabek</Text>
            </View>
            <View style={{width:'50%'}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>•</Text>
                        <Text style={styles.textContent}>Mengajukan BNI Fleksi sesuai ketentuan BNI dan mengikatkan diri dengan BNI</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>•</Text>
                        <Text style={styles.textContent}>Pencairan ke rekening penyaluran gaji di BNI</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>•</Text>
                        <Text style={styles.textContent}>Tidak akan memindahkan rekening penyaluran gaji s.d kredit lunas</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>•</Text>
                        <Text style={styles.textContent}>Mengijinkan BNI untuk mendapatkan dan memeriksa informasi yang diperlukan</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>•</Text>
                        <Text style={styles.textContent}>Saldo blokir 1x angsuran</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>•</Text>
                        <Text style={styles.textContent}>Layanan dan penyelesaian pengaduan nasabah hubungi BNI call 1500046</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}

const styles=StyleSheet.create ({
    container: {
        width:'100%',
        // backgroundColor:'yellow',
        justifyContent:'center',
    },
    textHeader: {
        fontWeight: '700',
        fontSize: 14,
    },
    textContent: {
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'justify',
        lineHeight: 16,
    }
})

export default InfoKFA;