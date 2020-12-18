import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';

const PhotoProfile = ({pic, name, role}) => {
  return (
    <View>
      <View style={styles.img}>
        <Image source={pic} style={styles.image} />
      </View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text1}>{role}</Text>
    </View>
  );
};

export default PhotoProfile;

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  text: {fontSize: 24, textAlign: 'center'},
  img: {alignItems: 'center', marginVertical: 20},
  text1: {fontSize: 20, textAlign: 'center', color: 'grey'},
});
