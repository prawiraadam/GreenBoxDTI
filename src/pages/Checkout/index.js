import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, View, Image, TextInput} from 'react-native';
import Button from '../../components/atoms/Button';
import Header from '../../components/molekul/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils/colors";
import { Gap } from '../../components';

const DATA =[
    {
        id: 'order1',
        photo: 'https://cdn-cms.pgimgs.com/static/2020/10/3.-Panduan-Mudah-Budidaya-Kangkung-Di-Rumah.jpg',
        name: 'Kangkung',
        qty: 1,
        price: 2000
    },
    {
        id: 'order2',
        photo: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/4/67339064/67339064_0e9a5822-c3db-49fb-be1a-ea1f3ad177e4_336_336.jpg',
        name: 'Bayam',
        qty: 2,
        price: 1500
    },
    {
        id: 'order3',
        photo: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/4/14/4419158/4419158_5757671e-8cb6-4bf7-b1e3-9aaa388dbaef_748_748.jpg',
        name: 'Kacang Panjang',
        qty: 3,
        price: 3000
    },
]

const Item = ({ photo, name, price, qty }) => {
    return (
        <View style={styles.orderList}>
            <Image 
                source={{uri: photo}}
                style={styles.orderImage}
            />
            <View style={{width: '75%'}}>
                <Text style={styles.boldText}>{name}</Text>
                <Text>Rp {price},- /ikat</Text>
            </View>
            <Text>x {qty}</Text>
        </View>
    )
}

const Checkout = ({ navigation }) => {
    const [message, setMessage] = useState(message)

    return(
        <View style={styles.page}>
            <Header title="Checkout" goBack />
            
            {/* Konten utama */}
            <View style={styles.body}>
                {/* Untuk alamat */}
                <View style={styles.shipAddress}>
                    <Ionicons name="location-sharp" size={20}/>
                    <View>
                        <Text style={styles.boldText}>Shipping Address</Text>
                        <Text>Trubus Official Store</Text>
                        <Text>Lottemart Parking Lot Jalan Soekarno - Hatta</Text>
                        <Text>No. 743 Arcamanik, Cipamokolan</Text>
                        <Text>Kec. Rancasari, Kota Bandung, Jawa Barat 40292</Text>
                    </View>
                </View>

                {/* Untuk list belanja */}
                <FlatList 
                    data = {DATA}
                    renderItem = {({ item }) => (
                        <Item 
                            photo = {item.photo}
                            name = {item.name}
                            price = {item.price}
                            qty = {item.qty}
                        />
                    )}
                    style={styles.bottomLine}
                />

                {/* Untuk message */}
                <View style={styles.message}>
                    <Text style={styles.boldText}>Message: </Text>
                    <TextInput 
                        placeholder="Please leave a message"
                        onChangeText={text => setMessage(text)}
                        value={message}
                    />
                </View>

                {/* Untuk payment method */}
                <Gap height={8}/>
                <View style={styles.payment}>
                    <Text style={styles.boldText}>Payment Method</Text>
                    <Text style={styles.boldText}>Select Payment Method {'>'}</Text>
                </View>

                <Gap height={4}/>
                <View style={styles.payment}>
                    <Text>Subtotal for products</Text>
                    <Text>Rp. 182.000</Text>
                </View>
                <View style={styles.payment}>
                    <Text>Shipping fee</Text>
                    <Text>Rp. 10.000</Text>
                </View>

                <Gap height={4}/>
                <View style={styles.payment}>
                    <Text style={styles.boldText}>Total Payment</Text>
                    <Text>Rp. 192.000</Text>
                </View>
            </View>

            {/* Untuk Footer */}
            <View style={styles.footer}>
                <View style={{flex: 1}}>
                    <Text>Total</Text>
                    <Text>Rp 192.000</Text>
                </View>
                
                <View style={{flex: 1.5}}> 
                    <Button
                        title='Create Order'
                        onPress={() => {
                            navigation.navigate('Transaction')
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Checkout;

const styles = StyleSheet.create ({
    page:{
        flex:1,
        backgroundColor: 'white'
    },
    body:{
        margin: 16
    },
    boldText:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    shipAddress:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 12,
        borderColor: '#7D8797'
    },
    orderList:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    orderImage:{
        borderRadius: 8,
        height: 52,
        width: 52,
        marginRight: 16
    },
    bottomLine:{
        borderBottomWidth: 1,
        paddingBottom: 12,
        borderColor: '#7D8797'
    },
    message:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#7D8797'
    },
    payment:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        marginHorizontal: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
}) 