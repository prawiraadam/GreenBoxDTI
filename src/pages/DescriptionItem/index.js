import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Footer, Header} from '../../components';
import DescItem from '../../components/molekul/DescItem';

const DescriptionItem = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.page}>
      <View style={styles.screen}>
        <Header title={item.title} goBack />
          <DescItem
            title={item.title}
            images={item.images}
            price={item.price}
            unit={item.unit}
            store={item.store}
            desc={item.desc}
          />
      </View>
      <Footer />
    </View>
  );
};

export default DescriptionItem;

const styles = StyleSheet.create({
  page: {flex: 1},
  screen: {flex: 1},
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
  info: {textAlign: 'center'},
});
