import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ModalDelete = ({ closeModal, handleSoftDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.isi}>
            <Image
                style={{ width: 160, height: 132 }}
                source={require("../assets/modal_delete.png")}
            />
            <Text style={{ fontWeight: "800", paddingTop: 10, fontSize: 16 }}>
                Apakah anda yakin?
            </Text>
            <Text style={{ paddingTop: 10, fontSize: 12, textAlign: "center" }}>
                Pengajuan yang telah dihapus akan hilang selamanya karena penghapusan tidak dapat dibatalkan          
            </Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={closeModal}
                    >
                    <Text
                    style={{
                        alignSelf: "center",
                        paddingTop: 8,
                        color: "#9E9E9E",
                        fontWeight: "700",
                        fontSize: 14,
                    }}
                        >
                    Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonHapus}
                    onPress={() => {
                        handleSoftDelete();
                        closeModal()
                    }}
                    >
                    <Text
                    style={{
                        alignSelf: "center",
                        paddingTop: 8,
                        color: "white",
                        fontWeight: "700",
                        fontSize: 14,
                    }}
                        >
                    Hapus
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};
export default ModalDelete;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",

        // backgroundColor:'red'

        // backgroundColor: "red",
    },
    modal: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: 350,
        height: 350,
        // marginHorizontal: 13,
        borderRadius: 10,
        // backgroundColor: "red",
    },
    buttonHapus: {
        marginVertical: 20,
        padding: 5,
        margin: 5,
        alignSelf: "center",
        backgroundColor: "#D4352A",
        borderRadius: 20,
        width: 110,
        height: 44,
    },
    buttonCancel: {
        marginVertical: 20,
        padding: 5,
        margin: 5,
        alignSelf: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        width: 110,
        height: 44,
    },
    isi: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 32,
    },
});
