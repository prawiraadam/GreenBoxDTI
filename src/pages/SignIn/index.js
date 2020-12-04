import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/atoms/Button';
import {Input} from '../../components/molekul';
import Gap from '../../components/atoms/Gap';
import {Link} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Get the veggies!</Text>
        <Text style={styles.subtitle}>
          Sign in sekarang dan dapatkan sayur terbaikmu!
        </Text>
        <Gap height={20} />
      </View>
      <Input title="Email" />
      <Gap height={5} />
      <Input title="Password" />
      <Gap height={5} />
      <Link title="Lupa Password" size={12} />
      <Gap height={20} />
      <Button title="Sign in" onPress={() => navigation.replace('MainPage')} />
      <Gap height={10} />
      <View style={styles.or}>
        <Text>OR</Text>
        <Gap height={10} />
        <Link
          title="Buat Akun Baru"
          size={16}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 25, fontWeight: '700'},
  subtitle: {fontSize: 14},
  or: {alignItems: 'center'},
});
