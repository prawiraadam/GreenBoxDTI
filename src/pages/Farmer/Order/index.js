import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, TileOrder } from "../../../components";
import { colors } from "../../../utils";

const index = ({navigation}) => {
  const OrderList = [
    {
      id: '1',
      day: '29',
      month: 'Nov',
      year: '2020',
      orderId: '3212',
      orderName: 'Adam Vegetable Store',
      orderEmail: 'adamvegetable123@gmail.com',
      progress: 'Processing',
      phoneNumber: '081234567890',
      address: 'Jl. Sukabirus 12, Bojongsoang Kab. Bandung',
      orderItem: [
        {
          itemId: '1',
          OrderVegetableName: 'Bayam',
          OrderPrice: '20.000',
          OrderCount: 5
        },
        {
          itemId: '2',
          OrderVegetableName: 'Kangkung',
          OrderPrice: '20.000',
          OrderCount: 5
        },
      ],
      total: '200.000',
      postalFee: '12.000'
    },
    {
      id: '2',
      day: '29',
      month: 'Nov',
      year: '2020',
      orderId: '3212',
      orderName: 'Adam Vegetable Store',
      orderEmail: 'adamvegetable123@gmail.com',
      progress: 'Processing',
      phoneNumber: '081234567890',
      address: 'Jl. Sukabirus 12, Bojongsoang Kab. Bandung',
      orderItem: [
        {
          itemId: '1',
          OrderVegetableName: 'Bayam',
          OrderPrice: '20.000',
          OrderCount: 5
        },
        {
          itemId: '2',
          OrderVegetableName: 'Kangkung',
          OrderPrice: '20.000',
          OrderCount: 5
        },
      ],
      total: '200.000',
      postalFee: '12.000'
    },
    {
      id: '3',
      day: '29',
      month: 'Nov',
      year: '2020',
      orderId: '3212',
      orderName: 'Adam Vegetable Store',
      orderEmail: 'adamvegetable123@gmail.com',
      progress: 'Processing',
      phoneNumber: '081234567890',
      address: 'Jl. Sukabirus 12, Bojongsoang Kab. Bandung',
      orderItem: [
        {
          itemId: '1',
          OrderVegetableName: 'Bayam',
          OrderPrice: '20.000',
          OrderCount: 5
        },
        {
          itemId: '2',
          OrderVegetableName: 'Kangkung',
          OrderPrice: '20.000',
          OrderCount: 5
        },
      ],
      total: '200.000',
      postalFee: '12.000'
    },
  ];
  return (
    <>
      <Header title="Order"/>
      <View style={styles.screen}>
        {OrderList.map((item, index) => {
          return <TileOrder 
            key={index} 
            Item={item} 
            onPress={() => navigation.navigate('DetailOrder', {item})}/>;
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
