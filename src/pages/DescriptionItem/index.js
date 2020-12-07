import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Counter, Gap, Header} from '../../components';

const DescriptionItem = ({navigation}) => {
  const images = [
    'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
    'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
    'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
  ];

  return (
    <View>
      <Header title="Kangkung" onPress={() => navigation.goBack()} />
      <SliderBox
        images={images}
        sliderBoxHeight={230}
        dotColor="#27ae60"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          padding: 0,
          margin: 0,
        }}
      />
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>Kangkung</Text>
          <Text style={styles.subtitle}>Rp. 6.000, -/200gr</Text>
          <Text>Sayur Segar Bandung</Text>
        </View>
        <View>
          <Counter />
        </View>
      </View>
      <View style={styles.desc}>
        <Text>Deskripsi</Text>
        <Gap height={10} />
        <View style={styles.info}>
          <Text>
            Note Harap diperhatikan : 1. Lorem ipsum dolor sit amet,consectetur
            adipiscing elit. Etiam blandit lacus sed ornare vestibulum. Utid
            metus eget augue scelerisque luctus.2. Mauris eu quam nec turpis
            porttitor dapibus efficitur et lorem. Aenean at finibus orci. In
            molestie tincidunt vestibulum. 3. Praesent vestibulum enim eget
            augue facilisis,
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text>Total</Text>
          <Text>Rp. 20.000</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.direct}>Buy Direct</Text>
          </TouchableOpacity>
          <Gap width={20} />
          <TouchableOpacity>
            <Text style={styles.basket}>+ Basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DescriptionItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    alignItems: 'center',
    marginTop: 8,
  },
  desc: {margin: 15, marginTop: 2},
  title: {fontSize: 22, fontWeight: '600', marginBottom: 4},
  subtitle: {fontSize: 16, fontWeight: '600', marginBottom: 4},
  info: {textAlign: 'center', marginBottom: 15},
  footer: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    height: 82,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {flexDirection: 'row'},
  direct: {
    borderWidth: 1,
    backgroundColor: 'white',
    color: '#0BB407',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#0BB407',
    fontWeight: '600',
    fontSize: 16,
  },
  basket: {
    borderWidth: 1,
    backgroundColor: '#0BB407',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderColor: '#0BB407',
    fontWeight: '600',
    fontSize: 16,
  },
});
