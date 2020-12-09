import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Footer, Header} from '../../components';
import DescItem from '../../components/molekul/DescItem';

const DescriptionItem = ({ route }) => {
  const { item } = route.params;
  const ItemList = [
    {
      id: '1',
      title: 'Kangkung',
      photo:
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
      price: '2.000',
      unit: 'Ikat',
      store: "Bandung's Parmer",
      rating: 5,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
  ];

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
