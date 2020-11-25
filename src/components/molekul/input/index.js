import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#27ae60',
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#c8d6e5',
  },
  text: {fontSize: 16, color: '#7D8797', marginBottom: 6},
});
