import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import DropdownKFP from "../components/DropdownKFP";

const KetentuanFleksiPensiun = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Syarat dan Ketentuan
        </Text>
        <Text style={styles.textheader}>Pengertian</Text>
        <Text style={styles.textcontent}>
          Fasilitas kredit lunak (soft loan) kepada para calon pensiun,
          pensiunan dan janda/duda dari pensiunan untuk segala keperluan
        </Text>
        <Text style={styles.textheader}>Kriteria Debitur</Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            textAlign: "justify",
            marginBottom: 5,
          }}
        >
          Penyaluran Gaji BNI
        </Text>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Pensiunan atau Janda/Duda dari pensiunan peserta Taspen, Asabri, dan
            Dana Pensiun milik BUMN/BUMD
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Calon Pensiun pegawai ASN, TNI/POLRI, dan pegawai di Institusi
            BUMN/BUMD selected (termasuk grup dan anak perusahaan)
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Menyalurkan gaji/pendapatan tetapnya di BNI
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            textAlign: "justify",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          Penyaluran Gaji Tidak BNI
        </Text>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Pensiunan atau Janda/Duda dari pensiunan peserta Taspen, Asabri, dan
            Dana Pensiun milik BUMN/BUMD
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Calon Pensiun pegawai ASN, TNI/POLRI, dan pegawai di Institusi
            BUMN/BUMD selected (termasuk grup dan anak perusahaan)
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Menyalurkan gaji/pendapatan tetapnya di BNI
          </Text>
        </View>
        <Text style={styles.textheader}>Usia</Text>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <Text style={styles.textcontent}>
            Maksimal 75 tahun pada saat kredit lunas
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>•</Text>
          <View style={{ flexDirection: "column", width: "100%" }}>
            <Text style={styles.textcontent}>Calon pensiun :</Text>
            <View style={styles.row}>
              <Text style={styles.textcontent}>a.</Text>
              <Text style={styles.textcontent}>
                Maksimal 5 (lima) tahun menjelang usia pensiun normal
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textcontent}>b.</Text>
              <Text style={styles.textcontent}>
                Khusus pegawai ASN (peserta Taspen) maksimal 10 (sepuluh) tahun
                menjelang usia pensiun normal
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.textheader}>Jaminan</Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            textAlign: "justify",
            marginBottom: 5,
          }}
        >
          Penyaluran Gaji BNI
        </Text>
        <View style={styles.row}>
          <Text style={styles.textcontent}>1.</Text>
          <View style={{ flexDirection: "column", width: "100%" }}>
            <Text style={styles.textcontent}>
              Calon Pensiun : Asli SK pengangkatan pegawai/SK pertama dan Asli
              SK terakhir pegawai aktif.
            </Text>
            <Text style={styles.textcontent}>Pensiunan : Asli SK Pensiun</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>2.</Text>
          <Text style={styles.textcontent}>
            Pemblokiran rekening afiliasi sebesar saldo minimal afiliasi
            ditambah 1 (satu) kali angsuran (pokok + bunga) sampai dengan kredit
            dinyatakan lunas oleh BNI.
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            textAlign: "justify",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          Penyaluran Gaji Tidak BNI
        </Text>
        <View style={styles.row}>
          <Text style={styles.textcontent}>1.</Text>
          <View style={{ flexDirection: "column", width: "100%" }}>
            <Text style={styles.textcontent}>
              Calon Pensiun : Asli SK pengangkatan pegawai/SK pertama dan Asli
              SK terakhir pegawai aktif.
            </Text>
            <Text style={styles.textcontent}>Pensiunan : Asli SK Pensiun</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.textcontent}>2.</Text>
          <View style={{ flexDirection: "column", width: "100%" }}>
            <Text style={styles.textcontent}>
              Apabila pendapatan tetap belum melalui BNI, maka dipersyaratkan
              blokir 3 (tiga) kali angsuran dengan rincian sebagai berikut :
            </Text>
            <View style={styles.row}>
              <Text style={styles.textcontent}>a.</Text>
              <Text style={styles.textcontent}>
                1 (satu) kali angsuran (pokok + bunga), ditambah saldo minimum
                di rekening afiliasi sesuai dengan ketentuan berlaku, sampai
                dengan kredit dinyatakan lunas oleh BNI, dan ditambah
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textcontent}>b.</Text>
              <Text style={styles.textcontent}>
                2 (dua) kali angsuran (pokok + bunga), yang dapat dibuka apabila
                pembayaran pendapatan tetap telah efektif disalurkan melalui BNI
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.textheader}>Penghasilan</Text>
        <Text style={styles.textcontent}>
          Penghasilan bersih per bulan adalah pendapatan tetap (fixed income)
          yang diterima melalui rekening penyaluran gaji di BNI minimal sebesar
          Rp. 1.500.000,- per bulan
        </Text>
        <DropdownKFP />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 8,
                color: "#ffff",
                fontWeight: "900",
              }}
            >
              Sebelumnya
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => navigation.navigate("SyaratKetentuan")}
          >
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 8,
                color: "white",
                fontWeight: "900",
              }}
            >
              Selanjutnya
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  textheader: {
    fontWeight: "700",
    fontSize: 14,
    marginTop: 14,
    marginBottom: 10,
  },
  textcontent: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 16,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  buttonNext: {
    padding: 5,
    margin: 5,
    alignSelf: "flex-end",
    // marginLeft: 80,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 130,
    height: 44,
  },
  buttonBack: {
    padding: 5,
    margin: 5,
    alignSelf: "flex-end",
    // marginLeft: 80,
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    width: 130,
    height: 44,
  },
});

export default KetentuanFleksiPensiun;
