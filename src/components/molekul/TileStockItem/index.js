import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Gap } from "../../../components";
import { colors } from "../../../utils";
import IconEdit from 'react-native-vector-icons/MaterialIcons';

const index = ({addPress, Item}) => {
  return (
    <>
      <View style={styles.component}>

        <View style={styles.container}>

          <Image style={styles.avatar} source={{ uri: Item.photo }}/>
          <Gap width={10}/>
          <View>
            <Text style={styles.title}>{Item.title}</Text>
            <Text style={styles.subtitle}>Rp. {Item.price}/{Item.unit}</Text>
          </View>

        </View>

        <View style={styles.container}>

          <View>
            <Text style={styles.title}>Total Stock</Text>
            <Text style={styles.subtitle}>{Item.stock}</Text>
          </View>
          <Gap width={10}/>
          <TouchableOpacity onPress={addPress}>
            <IconEdit name="mode-edit" size={20} color="#000"/>
          </TouchableOpacity>

        </View>

      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  component: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: colors.grey3
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 100
  },
  title: {
    fontWeight: '600'
  },
  subtitle: {
    fontWeight: '500',
    color: colors.grey1,
    fontSize: 12
  }
})
