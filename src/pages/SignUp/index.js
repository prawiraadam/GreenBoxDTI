import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Input} from '../../components/molekul';
import Button from '../../components/atoms/Button';
import {Gap, Pickers} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header title="Register" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.page}>
          <Input title="Nama Lengkap" />
          <Gap height={22} />
          <Input title="Email" />
          <Gap height={22} />
          <Input title="Password" />
          <Gap height={22} />
          <Pickers />
          <Gap height={40} />
          <Button title="Selanjutnya" />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {backgroundColor: 'white', flex: 1},
  page: {padding: 40, paddingTop: 0},
});
