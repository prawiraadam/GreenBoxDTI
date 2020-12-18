import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {Button, Input, Gap, Link} from '../../components';

const SignIn = ({navigation}) => {
  const [height, setHeight] = useState(Dimensions.get('window').height * 0.15);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const gotoDistributorPage = () => navigation.replace('MainPage');
  const gotoFarmerPage = () => navigation.replace('MainPageFarmer');

  const Navigate = () => {
    if (email == "distributor1@gmail.com" && password=="123123"){
      gotoDistributorPage();
    } else if (email == "farmer1@gmail.com" && password=="123123"){
      gotoFarmerPage();
    } else {
      console.log('akun tidak terdaftar');
      setError(true);
    }
  } 

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={height} />
        {/* title text */}
        <View>
          <Text style={styles.title}>Get the veggies!</Text>
          <Text style={styles.subtitle}>
            Sign in sekarang dan dapatkan sayur terbaikmu!
          </Text>
          <Gap height={20} />
        </View>

        {/* form email and password */}
        <Input 
          title="Email"
          onChangeText={(value) => setEmail(value)} 
          value={email}
        />
        <Gap height={10} />
        <Input 
          title="Password" 
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)} 
          value={password}
        />
        <Gap height={5} />
        <Link title="Lupa Password" size={12} />
        <Gap height={20} />

        {/* button sign in */}
        <Button
          title="Sign in"
          onPress={Navigate}
        />
        <Gap height={15} />

        {error && 
          <View>
            <Text style={styles.error}>Password/Email Salah</Text>
            <Gap height={15}/>
          </View>}

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
    backgroundColor: 'white',
  },
  title: {fontSize: 25, fontWeight: '700'},
  subtitle: {fontSize: 14},
  error: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red'
  },
  or: {alignItems: 'center'},
});
