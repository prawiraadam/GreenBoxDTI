import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack} from '../../../assets/';
import {Gap} from '../../atoms';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconBack />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#27ae60',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  text: {flex: 1, textAlign: 'center', fontSize: 18},
});
