import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconForward} from '../../assets';
import {ILLogo} from '../../assets/illustration';
import {Button, Gap} from '../../components/atoms';

const ProfileScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.screen}>
        <Gap height={20} />

        <ILLogo />
        <Gap height={10} />
        <Text style={styles.text1}>GreenBox Official Store</Text>
        <View>
          <View style={styles.border}>
            <Text style={styles.text}>Edit Profile</Text>
            <TouchableOpacity>
              <IconForward />
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <Text style={styles.text}>Language</Text>
            <TouchableOpacity>
              <IconForward />
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <Text style={styles.text}>My Store</Text>
            <TouchableOpacity>
              <IconForward />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Button title="LOGOUT" />
      </View>
      <Gap height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 49,
    backgroundColor: 'white',
  },
  screen: {alignItems: 'center', paddingBottom: 50, paddingTop: 20},
  border: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 310,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  text: {fontSize: 24},
  text1: {
    fontSize: 24,
    borderBottomWidth: 1,
    width: 310,
    textAlign: 'center',
    paddingBottom: 50,
  },
});

export default ProfileScreen;
