import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    backgroundColor: '#27ae60',
    paddingVertical: 10,
    borderRadius: 15,
  },
  text: {fontSize: 16, fontWeight: '600', textAlign: 'center', color: 'white'},
});
