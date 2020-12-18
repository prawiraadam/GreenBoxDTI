import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Gap, Rating} from '../../atoms';
import { IconStore } from "../../../assets";

const Item = ({title, photo, onPress, price, unit, store, rating }) => {
  return (
    <View style={styles.component}>
      <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: photo}} />
      </TouchableOpacity>
      <View style={styles.descContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>Rp. {price}/{unit}</Text>
        <Gap height={5}/>
        <View style={styles.storeContainer}>
          <Image source={IconStore} style={styles.storeIcon}/>
          <Text>{store}</Text>
        </View>
        <Gap height={5}/>
        <Rating value={rating}/>
      </View>
      <Gap height={20} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  component: {
    width: '50%'
  },
  imageContainer: {
    marginLeft: 20
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    alignItems: 'center'
  },
  descContainer: {
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  storeIcon: {
    height: 20,
    width: 20
  },
});
