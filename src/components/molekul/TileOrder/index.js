import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gap } from "../../../components";
import { colors } from "../../../utils";
import Icon from 'react-native-vector-icons/AntDesign';

const index = ({onPress, Item}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.component}>
      {/* date & order data */}
      <View style={styles.container}>
        {/* date */}
        <View style={styles.date}>
          <Text style={styles.year}>{Item.year}</Text>
          <Text style={styles.day}>{Item.day}</Text>
          <Text style={styles.month}>{Item.month}</Text>
        </View>
        <Gap width={10}/>
        {/* order data */}
        <View>
          <Text>Order: <Text style={styles.orderId}>#{Item.orderId}</Text></Text>
          <Text style={styles.orderName}>{Item.orderName}</Text>
          <Text style={styles.orderEmail}>{Item.orderEmail}</Text>
          <Text>Total: <Text style={styles.orderTotal}>Rp. {Item.total}</Text></Text>
        </View>
      </View>

      <View style={styles.containerRight}>
        <View style={styles.progress}>
          <Text style={styles.progressText}>{Item.progress}</Text>
        </View>
        <Gap height={10}/>
        <Icon name="right" size={25} color={colors.green1} />
      </View>
    </TouchableOpacity>
  )
}

export default index

const styles = StyleSheet.create({
  component: {
    marginHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: colors.grey3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flexDirection: 'row',
  },
  containerRight:{
    alignItems: 'flex-end'
  },
  date: {
    alignItems: 'center'
  },
  year: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: -12
  },
  day: {
    fontSize: 36,
    fontWeight: '700',
    fontStyle: 'italic',
    color: colors.grey1
  },
  month: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: -12
  },
  orderId: {
    color: colors.grey1
  },
  orderName: {
    fontSize: 18,
    fontWeight: '700'
  },
  orderEmail: {
    fontSize: 12
  },
  orderTotal: {
    color: colors.grey1
  },
  progress: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.green1,
    borderRadius: 100
  },
  progressText: {
    fontSize: 12,
    color: colors.green1
  }
})