import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {SearchInput, Gap, Item} from '../../components';
import { colors } from "../../utils";

const DiscoverScreen = ({navigation}) => {
  const ItemList = [
    {
      id: '1',
      title: 'Kangkung',
      photo:
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '2',
      title: 'Bayam',
      photo:
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/4/67339064/67339064_0e9a5822-c3db-49fb-be1a-ea1f3ad177e4_336_336.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '3',
      title: 'Brokoli',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/4/94da5f0d-9d06-406f-85ec-6fa5ac9b0a39.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '4',
      title: 'Jamur Shitake',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2018/1/4/0/0_8ff3f36a-ad63-4e40-8139-04e38e1082f3_700_678.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '5',
      title: 'Kacang Panjang',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/4/14/4419158/4419158_5757671e-8cb6-4bf7-b1e3-9aaa388dbaef_748_748.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '6',
      title: 'Buncis',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/2/batch-upload/batch-upload_5dd8bc2b-a9a2-4b1a-ae83-1a92ae1e0037.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '7',
      title: 'Cabe Rawit Merah',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/1/627536859/627536859_19276632-b2a0-4a02-8201-6e4bd84cd7be_1152_1152.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '8',
      title: 'Bawang Putih',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/25/2022930/2022930_1345c606-d4b6-40ae-8b46-d581952b516f_1512_1512.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
    {
      id: '9',
      title: 'Bawah Merah',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/24/4419158/4419158_ae366951-c365-418a-ad3a-ab1566c91f80_884_884.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: 'Bandung\'s Parmer',
      rating: 5
    },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView>
        {/* Search Input */}
        <SearchInput />

        {/* City */}
        <View style={styles.city}>
          <Text style={styles.cityTitle}>Kota Bandung</Text>
        </View>
        <Gap height={10}/>

        {/* List Item */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
          <View style={styles.list}>
            {ItemList.map(item => {
              return(
                <Item
                  title={item.title}
                  photo={item.photo}
                  price={item.price}
                  unit={item.unit}
                  store={item.store}
                  rating={item.rating}
                  onPress={() => navigation.navigate('DescriptionItem')}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  city: {
    marginLeft: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.green1,
    width: 120,
    borderRadius: 100
  },
  cityTitle: {
    textAlign: 'center',
    color: colors.green1
  },
  titleRightContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  titleRight: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    flexWrap: 'wrap'
  },
});
