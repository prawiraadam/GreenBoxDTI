import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {Button, Input, Gap, Link} from '../../components';


const SignIn = ({navigation}) => {
  const [height, setHeight] = useState(Dimensions.get('window').height * 0.15);
  return (
    <View style={styles.page}>
      <ScrollView>
        <Gap height={height}/>
        {/* title text */}
        <View>
          <Text style={styles.title}>Get the veggies!</Text>
          <Text style={styles.subtitle}>
            Sign in sekarang dan dapatkan sayur terbaikmu!
          </Text>
          <Gap height={20} />
        </View>

        {/* form email and password */}
        <Input title="Email" />
        <Gap height={10} />
        <Input title="Password" />
        <Gap height={5} />
        <Link title="Lupa Password" size={12} />
        <Gap height={20} />

        {/* button sign in */}
        <Button title="Sign in" onPress={() => navigation.replace('MainPage')} />
        <Gap height={15} />

        {/* section navigate to register */}
        <View style={styles.or}>
          <Text>OR</Text>
          <Gap height={10} />
          <Link
            title="Buat Akun Baru"
            size={16}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {fontSize: 25, fontWeight: '700'},
  subtitle: {fontSize: 14},
  or: {alignItems: 'center'},
});
