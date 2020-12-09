import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, TileStockItem } from "../../../components";
import { colors } from "../../../utils";
import IconAdd from 'react-native-vector-icons/Ionicons';

const index = () => {

  const ItemList = [
    {
      id: '1',
      title: 'Kangkung',
      photo:
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '2',
      title: 'Bayam',
      photo:
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/4/67339064/67339064_0e9a5822-c3db-49fb-be1a-ea1f3ad177e4_336_336.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '3',
      title: 'Brokoli',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/10/4/94da5f0d-9d06-406f-85ec-6fa5ac9b0a39.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '4',
      title: 'Jamur Shitake',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2018/1/4/0/0_8ff3f36a-ad63-4e40-8139-04e38e1082f3_700_678.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '5',
      title: 'Kacang Panjang',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/4/14/4419158/4419158_5757671e-8cb6-4bf7-b1e3-9aaa388dbaef_748_748.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '6',
      title: 'Buncis',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/2/batch-upload/batch-upload_5dd8bc2b-a9a2-4b1a-ae83-1a92ae1e0037.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '7',
      title: 'Cabe Rawit Merah',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/1/627536859/627536859_19276632-b2a0-4a02-8201-6e4bd84cd7be_1152_1152.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '8',
      title: 'Bawang Putih',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/25/2022930/2022930_1345c606-d4b6-40ae-8b46-d581952b516f_1512_1512.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
      images: [
        'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        'https://cdn-2.tstatic.net/pontianak/foto/bank/images/kangkung-masuk-daftar-tanaman-berbahaya-di-amerika-dilarang-dijual-disana.jpg',
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/10/962408/540x270/8-khasiat-cantik-yang-bisa-didapat-cuma-dengan-makan-kangkung-tak-perlu-superfood-rev-1.jpg',
      ],
      desc:
        'Kangkung (Ipomoea aquatica Forsk.) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Masakan kangkung yang populer adalah ca kangkung bumbu tauco atau terasi, juga di wewarungan terdapat pelecing kangkung lombok mantap',
    },
    {
      id: '9',
      title: 'Bawah Merah',
      photo:
        'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/24/4419158/4419158_ae366951-c365-418a-ad3a-ab1566c91f80_884_884.jpg',
      price: '2.000',
      unit: 'Ikat',
      rating: 5,
      stock: 200,
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
    <>
      <Header title="Your Item"/>
      <View style={styles.screen}>
      {ItemList.map((item, index) => {
        return(
          <TileStockItem 
            key={index} 
            Item={item}
            addPress={() => console.log('clicked')}
          />
        );
      })}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}
          onPress={() => console.log('go to add item')}
        >
          <IconAdd name="add" size={35} color="#fff"/>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    borderRadius: 100,
    backgroundColor: colors.green1
  }
})
