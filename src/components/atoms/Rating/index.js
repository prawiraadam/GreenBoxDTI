import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements';
import { colors } from '../../../utils';

const index = ({value}) => {
  return (
    <View style={styles.rating}>
      <Rating
        type='custom'
        ratingCount={5}
        startingValue={value}
        imageSize={20}
      />
      <Text style={styles.ratingNumber}>({value})</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingNumber: {
    marginLeft: 5,
    color: colors.grey1
  }
})