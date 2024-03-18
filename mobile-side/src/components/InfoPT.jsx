import { StyleSheet, View, Text } from "react-native";

const InfoPT = () => {
  return (
    <View style={styles.info}>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>Fotocopy KTP (Suami/Istri)</Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>Fotocopy Kartu Keluarga</Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>
          Fotocopy Surat Nikah (Apabila sudah menikah)
        </Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>Fotocopy NPWP Pribadi / SPT PPh 21</Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>
          Fotocopy Rekening Koran 6 Bulan Terakhir
        </Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>Fotocopy Ijin Praktek Profesi</Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>Pas Foto 4x6 (Pemohon: Suami/Istri)</Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>Fotocopy Dokumen Jaminan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    // padding: 10,
    width: "100%",
    // borderRadius: 5,
    // marginTop: 10,
    // backgroundColor: "red",
    alignItems: "flex-start", // Tambahkan ini untuk menempatkan teks di paling kiri
  },
  isi: {
    flexDirection: "row",
  },
  teks: {
    fontSize: 12,
    lineHeight: 18,
  },
});

export default InfoPT;
