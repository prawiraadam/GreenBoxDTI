import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Link = ({title, size, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size) => ({
    fontSize: size,
    color: '#7D8797',
    textDecorationLine: 'underline',
  }),
});
