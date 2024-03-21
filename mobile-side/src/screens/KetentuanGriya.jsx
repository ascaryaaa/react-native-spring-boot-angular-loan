import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import DropdownPT from "../components/DropdownPT";
import DropdownPro from "../components/DropdownPro";
import DropdownPW from "../components/DropdownPW";

const KetentuanGriya = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("DataPemohon")}>
          <Image
            source={require("../../../mobile-side/src/assets/Icon_leftarrow.png")}
          />
        </TouchableOpacity>

        <Text>Digital Loan</Text>
        <Image
          source={require("../../../mobile-side/src/assets/Icon_homeorg.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={{ fontWeight: "800", fontSize: 16 }}>
            Syarat dan Ketentuan
          </Text>
          <Text style={styles.fontbesar}>Pengertian</Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 12,
              lineHeight: 18,
              marginRight: 20,
              width: "100%",
            }}
          >
            BNI GRIYA merupakan fasilitas pembiayaan konsumtif yang dapat
            digunakan untuk tujuan : Pembelian, Pembangunan, Renovasi, Top Up,
            Refinancing, atau Take Over properti berupa rumah tinggal, villa,
            apartemen, kondominium, rumah toko, rumah kantor, atau tanah kavling
            yang besarnya disesuaikan dengan kebutuhan masing-masing pemohon.
          </Text>
          <Text style={styles.fontbesar}>Fitur BNI Griya</Text>
          <View>
            <Text style={styles.fontkecil}>
              1. Maksimum kredit hingga Rp 5 milyar
            </Text>
            <Text style={styles.fontkecil}>
              2. Jangka waktu kredit hingga 30 tahun
            </Text>
            <Text style={styles.fontbesar}>Persyaratan Umum</Text>
            <Text style={styles.fontkecil}>1. Warga Negara Indonesia.</Text>
            <Text style={styles.fontkecil}>
              2. Bekerja sebagai karyawan / wiraswasta / profesional.
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.fontkecil}>3. </Text>
              <Text style={styles.fontkecil}>
                Berusia minimal 21 tahun saat pengajuan dan pada saat kredit
                lunas maksimum berusia 55 tahun (karyawan) atau 65 tahun
                (wiraswasta/ profesional).
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.fontkecil}>4. </Text>
              <Text style={styles.fontkecil}>
                Mengisi formulir dan melengkapi persyaratan dokumen permohonan.
              </Text>
            </View>
          </View>

          <Text style={styles.fontbesar}>Persyaratan Dokumen</Text>
          <DropdownPT></DropdownPT>
          <DropdownPro></DropdownPro>
          <DropdownPW></DropdownPW>

          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={styles.buttonSebelumnya}
              onPress={() => navigation.navigate("ProfileKeuanganFleksiAktif")}
            >
              <Text style={styles.sebelumnya}> Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSelanjutnya}
              onPress={() => navigation.navigate("SyaratKetentuan")}
            >
              <Text style={styles.selanjutnya}> Selanjutnya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16, // Set horizontal padding to 16
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
  },
  body: {
    width: "100%",
  },
  fontkecil: {
    textAlign: "justify",
    fontSize: 12,
    lineHeight: 18,
  },
  fontbesar: {
    fontWeight: "800",
    fontSize: 14,
    marginVertical: 8,
  },
  selanjutnya: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
  },
  buttonSelanjutnya: {
    backgroundColor: "#18C1CD",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 8,
  },
  buttonSebelumnya: {
    backgroundColor: "#DDEAF3",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  sebelumnya: {
    color: "#757575",
    textAlign: "center",
    fontWeight: "800",
  },
});

export default KetentuanGriya;
