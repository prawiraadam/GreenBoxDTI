import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {SliderBox} from '..';
import { IconStore } from "../../../assets";
import {Counter, Gap, Rating} from '../../../components';

const DescItem = ({images, title, price, unit, store, desc, rating}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SliderBox images={images} />
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            Rp. {price}/{unit}
          </Text>
          <View style={styles.storeContainer}>
            <Image source={IconStore} style={styles.storeIcon}/>
            <Text>{store}</Text>
        </View>
          <Gap height={5}/>
          <Rating value={rating}/>
        </View>
        <View>
          <Counter />
        </View>
      </View>
      <View style={styles.desc}>
        <Text>Deskripsi</Text>
        <Gap height={10} />
        <View style={styles.info}>
          <Text>{desc}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DescItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingBottom: 20,
    alignItems: 'center',

    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  desc: {
    margin: 10,
    marginTop: 2,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {fontSize: 22, fontWeight: '600', marginBottom: 4},
  subtitle: {fontSize: 16, fontWeight: '600', marginBottom: 4},
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  storeIcon: {
    height: 20,
    width: 20
  },
  info: {textAlign: 'center'},
});
