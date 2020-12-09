import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, TileOrder } from "../../../components";
import { colors } from "../../../utils";

const index = () => {
  const OrderList = [
    {
      id: '1',
      day: '29',
      month: 'Nov',
      year: '2020',
      orderId: '3212',
      orderName: 'Adam Vegetable Store',
      orderEmail: 'adamvegetable123@gmail.com',
      total: '20.000',
      progress: 'Processing'
    },
    {
      id: '2',
      day: '29',
      month: 'Nov',
      year: '2020',
      orderId: '3212',
      orderName: 'Adam Vegetable Store',
      orderEmail: 'adamvegetable123@gmail.com',
      total: '20.000',
      progress: 'Processing'
    },
    {
      id: '3',
      day: '29',
      month: 'Nov',
      year: '2020',
      orderId: '3212',
      orderName: 'Adam Vegetable Store',
      orderEmail: 'adamvegetable123@gmail.com',
      total: '20.000',
      progress: 'Processing'
    },
  ];
  return (
    <>
      <Header title="Order"/>
      <View style={styles.screen}>
        {OrderList.map((item, index) => {
          return <TileOrder key={index} Item={item} onPress={() => console.log('gotoDetail')}/>;
        })}
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  screen: {
    flex:1,
    backgroundColor: colors.white
  }
})
