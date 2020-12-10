import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Header, UnderlineText, Button, Pickers, Gap } from "../../../components";
import { colors } from "../../../utils";

const index = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <>
      <Header title={'Order #' + item.orderId} goBack/>
      <View style={styles.screen}>
        <ScrollView>
          <Text style={styles.datetime}>{item.day} {item.month} {item.year}</Text>
          <Gap height={10}/>
          <UnderlineText title="Nama Penerima :" placehorder={item.orderName}/>
          <Gap height={10}/>
          <UnderlineText title="Email Penerima :" placehorder={item.orderEmail}/>
          <Gap height={10}/>
          <UnderlineText title="Nomor Telepon Penerima :" placehorder={item.phoneNumber}/>
          <Gap height={10}/>
          <UnderlineText title="Alamat Penerima :" placehorder={item.address}/>
          <Gap height={10}/>
          <View style={styles.orderListContainer}>
            <View>
              {
                item.orderItem.map((item, index) => {
                  return <View key={index}>
                    <Text>{item.OrderVegetableName}</Text>
                    <Text>Rp. {item.OrderPrice} x {item.OrderCount}</Text>
                    <Gap height={10}/>
                  </View>;
                })
              }
            </View>
            <View>
              <Text>Biaya Pengiriman :</Text>
              <Text>Rp. {item.postalFee}</Text>
            </View>
          </View>
          <Gap height={20}/>
          <Text>Total: {item.total}</Text>
          <Gap height={20}/>
          <Pickers progress title="Order Status :" />
          <Gap height={20}/>
          <Button title="PERBARUI" onPress={() => navigation.pop()}/>
        </ScrollView>
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  screen: {
    flex:1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  datetime: {
    fontWeight: '700',
    fontSize: 16
  },
  orderListContainer: {
    padding: 20,
    backgroundColor: colors.grey2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})