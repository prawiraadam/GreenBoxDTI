import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from "../../../utils";
import { Gap } from "../../../components";

const index = ({title, placehorder}) => {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={5}/>
      <Text>{placehorder}</Text>
    </View>
  )
}

export default index


const styles = StyleSheet.create({
  component: {
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderColor: colors.grey2
  },
  title: {
    fontSize: 12,
    fontWeight: '700'
  }
})