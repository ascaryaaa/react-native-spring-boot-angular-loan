import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constant from '../utils/Constant';

const SANDBOX = () => {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch(Constant.getUsers);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User List</Text>
      <View style={styles.dataContainer}>
        {data.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <Text style={styles.userInfo}>{`ID: ${user.id_user}`}</Text>
            <Text style={styles.userInfo}>{`Name: ${user.name_user}`}</Text>
            <Text style={styles.userInfo}>{`NIK: ${user.nik_user}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataContainer: {
    alignItems: 'center',
  },
  userContainer: {
    backgroundColor: '#35D841',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
  },
  userInfo: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
});

export default SANDBOX;
