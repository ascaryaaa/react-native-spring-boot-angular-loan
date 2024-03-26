import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Bniaddress = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <RNPickerSelect
      onValueChange={(value) => setSelectedValue(value)}
      items={[
        { label: '9060 - BNI KC Kediri', value: '9060' },
        { label: '9149 - BNI KC Kota Tua', value: '9149' },
        { label: '9000 - BNI KC Head Office', value: '9000' },
      ]}
      placeholder={{ label: 'Pilih unit kerja BNI terdekat...', value: null }}
      value={selectedValue}
    />
  );
};

export default Bniaddress;
