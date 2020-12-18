import React from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Button, Input, Gap, Header } from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from "../../../utils";
import { BackgroundUploadPhoto } from "../../../assets";

const index = ({route, navigation}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <>
    <Header title={item.title} goBack/>
    <View style={styles.page}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={() => console.log('open camera')}>
            <ImageBackground source={item.photo != null ? {uri: item.photo} : BackgroundUploadPhoto} style={styles.uploadPhoto}>
              <Icon name="camera" size={30} color={item.photo != null ? colors.grey1 :colors.black1} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <Input title="Nama Sayuran : " value={item.title == 'Tambahkan Sayuran' ? null : item.title }/>
        <Gap height={10} />
        <Input title="Catatan : " multiline={true} value={item.desc != null ? item.desc : ''}/>
        <Gap height={10} />
        <Input title="Harga : "  value={item.price != null ? item.price : ''}/>
        <Gap height={10} />
        <Input title="Satuan :"  value={item.unit != null ? item.unit : ''}/>
        <Gap height={10} />
        <Input title="Stok: "  value={item.stock != null ? item.stock.toString() : ''}/>
        <Gap height={30} />
        <Button
          title="SIMPAN"
          onPress={() => navigation.replace('MainPageFarmer')}
        />
        <Gap height={30} />
      </ScrollView>
    </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white'
  },
  uploadContainer: {
    alignItems: 'center'
  },
  uploadPhoto: {
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: 'center',
  }
})
