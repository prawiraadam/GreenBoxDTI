import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';

const Footer = () => {
  return (
    <View style={styles.page}>
      <View>
        <Text>Total Harga</Text>
        <Text>Rp. 20.000</Text>
      </View>
      <Gap width={15} />
      <View>
        <TouchableOpacity style={styles.buy}>
          <Text style={styles.text1}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.cart}>
          <Text style={styles.text2}>+ Masukan Keranjang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 70,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buy: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#0BB407',
  },
  cart: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#0BB407',
    borderColor: '#0BB407',
  },
  text1: {color: '#0BB407'},
  text2: {color: 'white'},
});
