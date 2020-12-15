import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ILTransactionSuccess } from "../../assets";
import { Button, Gap } from "../../components";

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={40}/>
      <Image
        source={ILTransactionSuccess}
        style={styles.vector}
      />
      <Gap height={40}/>
      <Text style={styles.title1}>Yeay! Selesai</Text>
      <Gap height={10}/>
      <Text style={styles.title2}>Selamat! Transaction Berhasil!</Text>
      <Gap height={50}/>
      <Button title="KE MENU UTAMA" onPress={() => navigation.replace('MainPage')}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40
  },
  vector: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  title1: {
    textAlign: 'center',
    color: '#90ee90',
    fontSize: 24
  },
  title2: {
    textAlign: 'center',
    fontSize: 18
  }
})
