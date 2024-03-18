import { StyleSheet, View, Text } from "react-native";

const InfoPW = () => {
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
          Fotocopy Legalitas Usaha / Surat Ijin Usaha / Surat Keterangan Usaha
          Perusahaan dari Pemerintah Daerah Setempat
        </Text>
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
      <View style={styles.isi}>
        <Text style={{ marginRight: 4 }}>•</Text>
        <Text style={styles.teks}>
          Fotocopy Laporan Keuangan 2 Tahun Terakhir
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "red",
  },
  isi: {
    flexDirection: "row",
  },
  teks: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "justify",
  },
});
export default InfoPW;

// Fotocopy KTP (Suami/Istri)
// Fotocopy Kartu Keluarga
// Fotocopy Surat Nikah (Apabila sudah menikah)
// Fotocopy NPWP Pribadi / SPT PPh 21
// Fotocopy Rekening Gaji 3 Bulan Terakhir
// Fotocopy Legalitas Usaha / Surat Ijin Usaha / Surat Keterangan Usaha Perusahaan dari Pemerintah Daerah Setempat
// Asli Surat Keterangan Kerja dan Slip Gaji
// Pas Foto 4x6 (Pemohon: Suami/Istri)
// Fotocopy Dokumen Jaminan
// Fotocopy Laporan Keuangan 2 Tahun Terakhir
