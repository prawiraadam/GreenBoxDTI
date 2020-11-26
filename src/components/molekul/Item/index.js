import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Gap } from '../../atoms'

const Item = ({title, photo}) => {
  return (
    <View style={styles.component}>
      <Image
        style={styles.image} 
        source={{ uri : photo}}
      />
      <Text style={styles.title}>{title}</Text>
      <Gap height={20}/>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  component: {
    flex: 1
  },
  image: {
    height: 200,
    width: 180,
    borderRadius: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
