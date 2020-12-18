import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors } from "../../../utils";

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green1,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {fontSize: 16, fontWeight: '600', textAlign: 'center', color: 'white'},
});
