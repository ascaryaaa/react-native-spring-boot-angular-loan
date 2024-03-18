import { StyleSheet, View, Text } from "react-native";

const InfoPro = () => {
  return (
    <View style={StyleSheet.info}>
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
        <Text style={styles.teks}>Fotocopy Rekening Gaji 3 Bulan Terakhir</Text>
      </View>
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>
          Asli Surat Keterangan Kerja dan Slip Gaji
        </Text>
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
    padding: 10,
    borderRadius: 5,
    marginTop: 10,

    // backgroundColor: "red",
  },
  isi: {
    flexDirection: "row",
    width: "100%",
  },
  teks: {
    fontSize: 12,
    lineHeight: 18,
  },
});
export default InfoPro;

// Fotocopy KTP (Suami/Istri)
// Fotocopy Kartu Keluarga
// Fotocopy Surat Nikah (Apabila sudah menikah)
// Fotocopy NPWP Pribadi / SPT PPh 21
// Fotocopy Rekening Gaji 3 Bulan Terakhir
// Asli Surat Keterangan Kerja dan Slip Gaji
// Pas Foto 4x6 (Pemohon: Suami/Istri)
// Fotocopy Dokumen Jaminan
