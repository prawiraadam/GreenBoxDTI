import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, TileOrder } from "../../../components";
import { colors } from "../../../utils";

const index = () => {
  return (
    <>
      <Header title="Order"/>
      <View style={styles.component}>
        <TileOrder/>
        <TileOrder/>
        <TileOrder/>
        <TileOrder/>
        <TileOrder/>
        <TileOrder/>
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  component: {
    marginHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: colors.grey3
  }
})
