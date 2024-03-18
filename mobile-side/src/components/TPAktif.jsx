import { View, Text, StyleSheet } from "react-native"

const TPAktif = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', }}>
                <View style={styles.squareHeader}>
                    <Text style={styles.textHeader}>Area</Text>
                </View>
                <View style={styles.squareHeader}>
                    <Text style={styles.textHeader}>Pola Individu</Text>
                </View>
                <View style={styles.squareHeader}>
                    <Text style={styles.textHeader}>Pola Kerjasama</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', }}>
                <View style={styles.squareCell1}>
                    <Text style={styles.textCell}>Jabodetabek</Text>
                </View>
                <View style={styles.squareCell1}>
                    <Text style={styles.textCell}>Rp 3.000.000</Text>
                </View>
                <View style={styles.squareCell1}>
                    <Text style={styles.textCell}>Rp 2.500.000</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', }}>
                <View style={styles.squareCell2}>
                    <Text style={styles.textCell}>Non-Jabodetabek</Text>
                </View>
                <View style={styles.squareCell2}>
                    <Text style={styles.textCell}>Rp 2.500.000</Text>
                </View>
                <View style={styles.squareCell2}>
                    <Text style={styles.textCell}>Rp 2.000.000</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 10,
    },
    textHeader: {
        textAlign: 'center',
        marginTop: 7,
        fontSize: 12,
        fontWeight: '700',
        color: 'white',
    },
    textCell: {
        textAlign: 'center',
        marginTop: 7,
        fontSize: 10,
        fontWeight: '400',
    },
    squareHeader: {
        backgroundColor: '#F68310',
        width: 126,
        height: 30,
        marginTop: 1,
        marginRight: 1,
    },
    squareCell1: {
        backgroundColor: '#FEF2E6',
        width: 126,
        height: 30,
        marginTop: 1,
        marginRight: 1,
    },
    squareCell2: {
        backgroundColor: '#FBCC9D',
        width: 126,
        height: 30,
        marginTop: 1,
        marginRight: 1,
    }
})
export default TPAktif;