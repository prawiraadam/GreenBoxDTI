import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
const PaymentListBank = ({bank, pic}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <Image source={pic} />
        <Gap width={10} />
        <View>
          <Text>{bank} (Dicek Otomatis)</Text>
          <Text style={styles.text}>Hanya menerima dari {bank}</Text>
          <Text style={styles.text}>Biaya Penanganan Rp. 1.000</Text>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

export default PaymentListBank;

const styles = StyleSheet.create({
  page: {paddingLeft: 35, marginBottom: 10},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontSize: 10, fontWeight: '400'},
  border: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#969191',
  },
});
