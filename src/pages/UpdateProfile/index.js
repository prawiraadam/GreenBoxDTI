import React from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';
import {BackgroundUploadPhoto} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import { colors } from "../../utils";
import Icon from 'react-native-vector-icons/AntDesign';

const UpdateProfile = ({navigation, route}) => {
  const {profile} = route.params;
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" goBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={24} />
        <View style={styles.content}>
          {/* profile pic */}
          <View style={styles.uploadContainer}>
            <TouchableOpacity onPress={() => console.log('open camera')}>
              <ImageBackground source={BackgroundUploadPhoto} style={styles.uploadPhoto}>
                <Icon name="camera" size={30} color={colors.black1} />
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <Gap height={24}/>
          <Input title="Nama Toko" value={profile.name}/>
          <Gap height={10} />
          <Input title="Email" value={profile.email} />
          <Gap height={10} />
          <Input title="Alamat" multiline={true} value={profile.alamat} />
          <Gap height={40} />
          <Button title="Save Profile" onPress={() => navigation.pop()}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {padding: 40, paddingTop: 0},
  uploadContainer: {
    alignItems: 'center'
  },
  uploadPhoto: {
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: 'center'
  },
});
