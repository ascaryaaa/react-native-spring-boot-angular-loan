import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Bniaddress = ({ value, onChangeText, error }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <RNPickerSelect
      // onValueChange={(value) => setSelectedValue(value)}
      onValueChange={(value) => onChangeText(value)}
      items={[
        { label: '9060 - BNI KC Kediri', value: '9060' },
        { label: '9149 - BNI KC Kota Tua', value: '9149' },
        { label: '9000 - BNI KC Head Office', value: '9000' },
      ]}
      // value={selectedValue}
      value={value}
    />
  );
};

export default Bniaddress;
