import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Buttonjk = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleOptionSelect('Pria')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
          <View style={styles.container}>
            {selectedOption === 'Pria' && (
              <View style={styles.button}/>
            )}
          </View>
          <Text style={styles.text}>Pria</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleOptionSelect('Wanita')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
          <View style={styles.container}>
            {selectedOption === 'Wanita' && (
              <View style={styles.button}/>
            )}
          </View>
          <Text style={styles.text}>Wanita</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Buttonjk;

const styles = StyleSheet.create ({
container: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#1394AD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
},
button: {
    height: 12,
    width: 12,
    borderRadius: 8,
    backgroundColor: '#000',
},
text: {
    fontWeight: '400',
}
})
