import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Constant from '../utils/Constant';
import { ScrollView } from 'react-native-gesture-handler';

const SANDBOX = () => {
  const [data, setData] = useState([]);
  const [dataJenisPinjaman, setDataJenisPinjaman] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch(Constant.getUsers);
      const jsonData = await response.json();
      const response2 = await fetch(Constant.getJenisPinjamans);
      const jsonData2 = await response2.json();
      setData(jsonData);
      setDataJenisPinjaman(jsonData2);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
      <Image source={{ uri: item.iconJenisPinjaman }} style={{ width: 50, height: 50, marginRight: 10 }} />
      <View>
        <Text>{item.nameJenisPinjaman}</Text>
        <Image source={{ uri: item.gambarJenisPinjaman }} style={{ width: 100, height: 100 }} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Jenis Pinjaman List</Text>
        <View style={styles.dataPinjamanContainer}>
          <FlatList
            data={dataJenisPinjaman}
            renderItem={renderItem}
            keyExtractor={(item) => item.idJenisPinjaman.toString()}
          />
        </View>
        <Text style={styles.heading}>User List</Text>
        <View style={styles.dataUserContainer}>
          {data.map((user, index) => (
            <View key={index} style={styles.userContainer}>
              <Text style={styles.userInfo}>{`ID: ${user.idUser}`}</Text>
              <Text style={styles.userInfo}>{`Name: ${user.nameUser}`}</Text>
              <Text style={styles.userInfo}>{`NIK: ${user.nikUser}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataPinjamanContainer: {
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  dataUserContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
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
