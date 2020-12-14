import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {Input, Button, Gap, Pickers, Link} from '../../components';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';

const SignUp = ({navigation}) => {
  const [userType, setUserType] = useState("Petani");

  const getUserType = (selected) => {
    console.log(selected);
    setUserType(selected);
  }
  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Gap height={20} />
          <ILLogo />
          <Gap height={20} />
          <Text style={styles.title}>Register</Text>
          <Gap height={20} />
        </View>

        <View style={styles.inputContainer}>
          <Input title="Nama Lengkap" />
          <Gap height={10} />
          <Input title="Email" />
          <Gap height={10} />
          <Input title="Password" />
          <Gap height={10} />
          <Pickers title="Pekerjaan" getUserType={getUserType}/>
          <Gap height={20} />
          <Button
            title="Selanjutnya"
            onPress={userType=="Petani" ? () => navigation.replace('MainPageFarmer') : () => navigation.replace('MainPage')}
          />
          <Gap height={20} />
        </View>

        <View style={styles.signinContainer}>
          <Text style={styles.haveAcc}>Sudah punya akun? </Text>
          <Link
            title="Sign In"
            size={12}
            onPress={() => navigation.navigate('SignIn')}
          />
          <Gap height={50} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {backgroundColor: 'white', flex: 1},
  logoContainer: {marginLeft: 40},
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.green1,
  },
  inputContainer: {paddingHorizontal: 40},
  signinContainer: {justifyContent: 'center', flexDirection: 'row'},
  haveAcc: {fontSize: 12, textAlign: 'center'},
});
