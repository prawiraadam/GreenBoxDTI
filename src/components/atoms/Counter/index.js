import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAddCounter, IconMinusCounter} from '../../../assets';
import Gap from '../Gap';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addNum = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.counter}>
        <TouchableOpacity onPress={minusCounter}>
          <IconMinusCounter />
        </TouchableOpacity>
        <Gap width={10} />
        <Text style={styles.text}>{counter}</Text>
        <Gap width={10} />
        <TouchableOpacity onPress={addNum}>
          <IconAddCounter />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textket}>Min. Pembelian 1pcs</Text>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  page: {alignItems: 'center'},
  counter: {
    flexDirection: 'row',
    width: 70,
    paddingBottom: 5,
    borderBottomWidth: 0.7,
    alignItems: 'center',
  },
  text: {fontSize: 20},
  textket: {fontSize: 12},
});
