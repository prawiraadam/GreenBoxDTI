import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILGetStrated, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View>
      {/* image background */}
      <ImageBackground source={ILGetStrated} style={styles.background}>
        <View style={styles.screen}>
          <ILLogo />
        </View>
      </ImageBackground>

      {/* section get started & sign in */}
      <View style={styles.page}>
        <Text style={styles.text}>Daily Fresh!</Text>
        <Gap height={5} />

        {/* button get started */}
        <Button
          title="Get Started"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Gap height={25} />

        {/* section sign in */}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.signup}>Sudah Punya Akun?</Text>
          <TouchableOpacity>
            <Text
              style={styles.signin}
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  background: {height: 450},
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#27ae60',
    marginVertical: 20,
  },
  page: {paddingHorizontal: 40},
  signup: {color: '#112340'},
  signin: {color: '#27ae60', paddingLeft: 5},
});
