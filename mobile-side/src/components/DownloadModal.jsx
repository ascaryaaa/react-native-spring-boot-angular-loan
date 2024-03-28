import { Modal, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import ModalDownload from "./ModalDownload";

export function DownloadModal({ visible, onClose, navigation }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
     <View style={styles.modalContainer}>
        {/* Pressable di luar modal */}
        <Pressable
          style={{
            flex: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onPress={onClose}
        >
          {/* ModalAwal tetap berada di dalam View */}
        </Pressable>
        <View style={styles.button}>
          <ModalDownload onClose={onClose} navigation={navigation} />
        </View>
      </View>   
    </Modal>
  );
}
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
    },
  
    button: {
      flex: 1,
      justifyContent: "center",
    },
  });
