import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const SearchInput = () => {
  return (
    <View style={styles.component}>
      <Input
        inputContainerStyle={styles.input}
        placeholder='Search Input'
        leftIcon={
          <IconFontisto
            name='search'
            size={16}
            color='#27AE60'
          />
        }
      />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  component: {
    margin: 10,
    marginLeft: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: "#27AE60",
    borderRadius: 100
  },
  input: {
    borderBottomWidth:0,
    marginBottom: -33,
    marginTop: -10,
  }
})
