import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDummyUser, ILGetStrated} from '../../assets/illustration';
import List from '../List';
import PhotoProfile from '../PhotoProfile';
import {Button, Gap} from '../../components/atoms';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <PhotoProfile
        pic={ILDummyUser}
        name="GreenBox Official"
        role="Distributor"
      />
      <Gap height={10} />
      <List
        title="Edit Profile"
        type="next"
        onPress={() => navigation.navigate('UpdateProfile')}
        goBack
      />
      <List title="Language" type="next" />
      <List title="My Store" type="next" />
      <Gap height={50} />
      <View style={styles.wrapper}>
        <Button title="LOGOUT" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  page: {padding: 15},
  wrapper: {paddingHorizontal: 25},
});
