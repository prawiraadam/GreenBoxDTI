import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Input} from '../../components/molekul';
import Button from '../../components/atoms/Button';
import {Gap} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header title="Register" onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <Input title="Nama Lengkap" />
        <Gap height={24} />
        <Input title="Nomor Telepon" />
        <Gap height={24} />
        <Input title="Email" />
        <Gap height={24} />
        <Input title="Password" />
        <Gap height={40} />
        <Button title="Selanjutnya" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {backgroundColor: 'white', flex: 1},
  page: {padding: 40, paddingTop: 0},
});
