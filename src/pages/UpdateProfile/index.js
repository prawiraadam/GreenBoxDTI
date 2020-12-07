import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILDummyUser} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import PhotoProfile from '../PhotoProfile';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" goBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <PhotoProfile
            pic={ILDummyUser}
            name="GreenBox Official"
            role="Distributor"
          />
          <Gap height={24} />
          <Input title="Nama Lengkap" />
          <Gap height={24} />
          <Input title="Email" />
          <Gap height={24} />
          <Input title="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {padding: 40, paddingTop: 0},
});
