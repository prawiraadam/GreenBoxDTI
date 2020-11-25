import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({title, size}) => {
  return (
    <View>
      <Text style={styles.text(size)}>{title}</Text>
    </View>
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
