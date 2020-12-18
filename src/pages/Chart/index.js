import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, View, Image} from 'react-native';
import {Button, Gap, Header} from '../../components';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils/colors";

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

const Item = ({ id, photo, name, price, qty }) => {
    const [unSelected, setSelected] = useState(false);

    return (
        <View style={styles.orderLayout}>
            <CheckBox 
                value = {unSelected}
                onValueChange={(newValue) => setSelected(newValue, id)}
            />
            <Image 
                style={styles.orderImage}
                source={{uri: photo}}
            />
            <View style={styles.itemText}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
                <Text>Rp. {price},- /ikat</Text>
                <View style={styles.quantity}>
                    <Ionicons name="remove-outline" size={20} color={colors.green1} />
                    <Text>{qty}</Text>
                    <Ionicons name="add-outline" size={20} color={colors.green1}/>
                </View>
            </View>
        </View>
    )
}

const Chart = ({ navigation }) => {
    const [unSelected, setSelected] = useState(false);

    return (
        <View style={styles.page}>
            <Header title="My Basket"/>
            <Gap height={10}/>
            <FlatList 
                data={DATA}
                renderItem = { ({ item }) => (
                    <Item 
                        id = {item.id} 
                        photo = {item.photo}
                        name = {item.name}
                        price = {item.price}
                        qty = {item.qty}
                    />
                )}
            />
            <View style={styles.footer}>
                <CheckBox 
                    style={{flex: 0.5}}
                    value={unSelected}
                    onValueChange={(newValue) => setSelected(newValue)}
                />
                <Text style={{flex: 1}}>All</Text>

                <View style={{flex: 1}}>
                    <Text>Total</Text>
                    <Text>Rp 60000</Text>
                </View>
                
                <View style={{flex: 1.5}}> 
                    <Button
                        title='Checkout'
                        onPress={() => {
                            navigation.navigate('Checkout')
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Chart;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        padding: 28,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: '#27ae60',
        alignItems: 'center'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 20
    },
    headerItem: {
        flex:1, 
        alignItems: 'center'
    },
    footer: {
        marginHorizontal: 28,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderLayout: {
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderImage: {
        height: 80,
        width: 80,
        marginRight: 12,
        marginLeft: 8,
        borderRadius: 8
    },
    itemText: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        height: 80,
        flex: 2
    },
    quantity:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '35%'
    }
});
