import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconForward} from '../../assets/icon';
import { colors } from "../../utils";

const List = ({title, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      {type === 'next' && <IconForward />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: colors.grey1
  },
  text: {fontSize: 18, fontWeight: '600'},
});
