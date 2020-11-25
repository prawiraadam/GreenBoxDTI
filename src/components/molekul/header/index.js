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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
