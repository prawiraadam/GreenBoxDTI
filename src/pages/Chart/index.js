import React from 'react';
import {StyleSheet, Text, FlatList, View, Image} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import Header from '../../components/molekul/header';

const DATA = [
  {
    id: 'order1',
    photo: '../../assets/illustration/quinoa-salad.jpg',
    name: 'Quinoa fruit salad',
    qty: 1,
    price: 10000,
  },
  {
    id: 'order2',
    photo: '../../assets/illustration/quinoa-salad.jpg',
    name: 'Quinoa fruit salad #2',
    qty: 2,
    price: 20000,
  },
  {
    id: 'order3',
    photo: '../../assets/illustration/quinoa-salad.jpg',
    name: 'Quinoa fruit salad #3',
    qty: 3,
    price: 30000,
  },
];

const Chart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="My Basket" onPress={() => navigation.goBack()} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.orderLayout}>
            <Image
              style={styles.orderImage}
              source={require('../../assets/illustration/quinoa-salad.jpg')}
            />
            <View style={styles.itemText}>
              <Text>{item.name}</Text>
              <Text>{item.qty} pcs</Text>
            </View>
            <Text>Rp {item.price}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={{flex: 1}}>
          <Text>Total</Text>
          <Text>Rp 60000</Text>
        </View>

        <View style={{flex: 1.5}}>
          <Button
            title="Checkout"
            onPress={() => {
              //Ke Halaman order
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    padding: 28,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#27ae60',
    alignItems: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    marginHorizontal: 28,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderLayout: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderImage: {
    height: 50,
    width: 50,
    marginRight: 16,
  },
  itemText: {
    alignItems: 'flex-start',
    flex: 2,
  },
});
