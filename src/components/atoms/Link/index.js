import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors } from "../../../utils";

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
    color: colors.green1,
    textDecorationLine: 'underline',
  }),
});
