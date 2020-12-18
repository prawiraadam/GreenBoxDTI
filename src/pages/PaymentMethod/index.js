import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconBankTransfer,
  IconBCA,
  IconBNI,
  IconBRI,
  IconLinkAja,
  IconMandiri,
  IconPermataBank,
} from '../../assets';
import {Gap, Header, PaymentListBank} from '../../components';

const PaymentMethod = () => {
  return (
    <View style={styles.page}>
      <Header title="Payment Method" goBack />
      <View style={styles.subpage}>
        <View style={styles.wrapper}>
          <View style={styles.subwrapper}>
            <IconLinkAja />
            <Gap width={10} />
            <Text style={styles.text}>Link Aja</Text>
            <Gap width={5} />
            <Text style={styles.subtext}>(Rp. 2.000.000 - Bebas Biaya)</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.subtext2}>Isi Saldo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subwrapper2}>
          <IconBankTransfer />
          <Gap width={10} />
          <Text style={styles.border}>Bank Transfer</Text>
        </View>
        <PaymentListBank pic={IconBCA} bank="Bank BCA" />
        <PaymentListBank pic={IconBNI} bank="Bank BNI" />
        <PaymentListBank pic={IconBRI} bank="Bank BRI" />
        <PaymentListBank pic={IconMandiri} bank="Bank Mandiri" />
        <PaymentListBank pic={IconPermataBank} bank="Permata Bank" />
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  page: {backgroundColor: '#FFFFFF', flex: 1},
  subpage: {padding: 20},
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#969191',
    marginBottom: 10,
  },
  subwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subwrapper2: {flexDirection: 'row'},
  text: {fontWeight: '700', fontStyle: 'italic', fontSize: 16},
  subtext: {fontWeight: '400', fontSize: 14},
  subtext2: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
    marginBottom: 10,
  },
  border: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#969191',
    paddingBottom: 10,
    marginBottom: 10,
  },
});
