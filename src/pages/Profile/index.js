import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {BackgroundUploadPhoto} from '../../assets';
import List from '../List';
import {Button, Gap} from '../../components/atoms';
import { colors } from "../../utils";
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
  const profile = 
  {
    id: '1',
    photo: 'https://www.berdesa.com/wp-content/uploads/2019/08/Tips-Berbisnis-Sayuran-Segar-Bisnis-Menggiurkan-Untung-Melimpah.jpeg',
    name: 'Metro Vegetable Store',
    email: 'metrovegstore123@gmail.com',
    alamat: 'Pusat Belanja Balubur, Jl. Kebon Bibit Blok AC No.17, Tamansari, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40132'
  };
  return (
    <View style={styles.page}>
      <ScrollView>
        <Gap height={30} />
        {/* profile pic */}
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={() => console.log('open camera')}>
            <ImageBackground source={{uri : profile.photo}} style={styles.uploadPhoto}>
              <Icon name="camera" size={30} color={colors.black1} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        
        {/* store name */}
        <Text style={styles.storeName}>{profile.name}</Text>

        {/* list settings */}
        <Gap height={30} />
        <List
          title="Edit Profile"
          type="next"
          onPress={() => navigation.navigate('UpdateProfile', {profile})}
        />
        <List title="Language" type="next" />
        <List title="My Store" type="next" />
        <Gap height={50} />
        <View style={styles.wrapper}>
          <Button title="LOGOUT" onPress={() => navigation.replace('SignIn')}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  page: {padding: 15, backgroundColor: '#FFFFFF', flex: 1},
  storeName: {
    textAlign: 'center',
    fontSize: 22
  },
  uploadContainer: {
    alignItems: 'center'
  },
  uploadPhoto: {
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: 'center'
  },
  wrapper: {paddingHorizontal: 25},
});
