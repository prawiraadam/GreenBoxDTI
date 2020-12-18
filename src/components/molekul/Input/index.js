import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Gap} from '../../atoms';
import {colors} from '../../../utils';

const Input = ({
  title,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  placeholder,
  multiline
}) => {
  const [border, setBorder] = useState(colors.grey4);
  const onFocusForm = () => {
    setBorder(colors.green1);
  };
  const onBlurForm = () => {
    setBorder(colors.grey4);
  };
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={5} />
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border, multiline)}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        multiline={multiline}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    color: colors.grey1,
  },
  input: (border, multiline) => ({
    borderWidth: 2,
    borderColor: border,
    borderRadius: 10,
    padding: 10,
    height: multiline && 100
  }),
});
