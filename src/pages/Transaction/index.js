import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Header, Gap, Button } from "../../components";
import { IconBCA, IconCopy } from "../../assets";
import { colors } from "../../utils";

const index = ({navigation}) => {
  return (
    <>
      <Header title="Pembayaran" goBack />
      <View style={styles.page}>
        <ScrollView>
          <View>
            {/* bank container */}
            <View style={styles.bankContainer}>
              <Text style={styles.title}>Tagihan</Text>
              <Gap height={10}/>
              <View style={styles.countContainer}>
                <Text>Lakukan Pembayaran Sebelum</Text>
                <View style={styles.counterContainer}>
                  <View style={styles.counter}>
                    <Text style={styles.time}>12</Text>
                  </View>
                  <Text>:</Text>
                  <View style={styles.counter}>
                    <Text style={styles.time}>00</Text>
                  </View>
                  <Text>:</Text>
                  <View style={styles.counter}>
                    <Text style={styles.time}>00</Text>
                  </View>
                </View>
              </View>
              <Gap height={20}/>
              <View style={styles.rekContainer}>
                <Image 
                  source={IconBCA}
                  style={styles.bank}
                />
                <View style={styles.dataContainer}>
                  <Text>BCA Virtual Account</Text>
                  <Gap height={5}/>
                  <View style={styles.rekeningText}>
                    <Text style={styles.rekening}>2313-3243-5645-1232</Text>
                    <Gap width={10}/>
                    <Image style={styles.copy} source={IconCopy}/>
                  </View>
                  <Gap height={5}/>
                  <Text>Jumlah Harus Dibayar</Text>
                  <Gap height={5}/>
                  <View style={styles.nominalText}>
                    <Text style={styles.nominal}>Rp. 192.000</Text>
                    <Gap width={10}/>
                    <Image style={styles.copy} source={IconCopy}/>
                  </View>
                </View>
              </View>
            </View>
            <Gap height={20}/>

            {/* cara pembayaran */}
            <View style={styles.instruction}>
              <Text style={styles.title}>Cara melakukan pembayaran</Text>
              <Gap height={10}/>
              <View style={styles.instructionTitle}>
                <Text>Melalui Mesin ATM</Text>
              </View>
              <Gap height={5}/>
              <Text style={styles.instructionIdx}>1. Masukan kartu ATM dan PIN</Text>
              <Text style={styles.instructionIdx}>2. Pilih Menu "Bayar/Beli"</Text>
              <Text style={styles.instructionIdx}>3. Pilih Menu "Lainnya", lalu pilih "Multipayment"</Text>
              <Text style={styles.instructionIdx}>4. Masukan kode 3123</Text>
              <Text style={styles.instructionIdx}>5. Masukan "Nomor Virtual Account", lalu pilih tombol benar</Text>
              <Gap height={10}/>
              <View style={styles.instructionTitle}>
                <Text>Internet Banking</Text>
              </View>
              <Gap height={5}/>
              <Text style={styles.instructionIdx}>1. Login pada aplikasi BCA Mobile</Text>
              <Text style={styles.instructionIdx}>2. Pilih “m-BCA”, lalu masukkan kode akses m-BCA</Text>
              <Text style={styles.instructionIdx}>3. Pilih “m-Transfer”</Text>
              <Text style={styles.instructionIdx}>4. Pilih “BCA Virtual Account”</Text>
              <Text style={styles.instructionIdx}>5. Masukkan nomor BCA Virtual Account Anda, atau pilih dari Daftar Transfer</Text>
              <Text style={styles.instructionIdx}>6. Masukkan jumlah yang akan dibayarkan</Text>
              <Text style={styles.instructionIdx}>7. Masukkan PIN m-BCA Anda</Text>
            </View>
            <Gap height={20}/>
            </View>

          <View style={styles.buttonContainer}>
            <Button title="BAYAR SEKARANG" onPress={() => navigation.replace('TransactionSuccess')}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between'
  },
  bankContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: '700',
    fontSize: 18
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  counterContainer: {
    flexDirection: 'row'
  },
  counter: {
    backgroundColor: 'red',
    padding: 3,
    borderRadius: 3,
    marginHorizontal: 5
  },
  time: {
    color: 'white'
  },
  rekContainer: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10
  },
  dataContainer: {
    marginLeft: 20
  },
  rekeningText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rekening: {
    fontWeight: '700',
    color: colors.grey1,
    fontSize: 16
  },
  copy:{
    width: 20,
    height: 20
  },
  nominalText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nominal: {
    fontSize: 20,
    color: 'orange',
    fontWeight: '700'
  },
  instruction: {
    backgroundColor: 'white',
    padding: 20
  },
  instructionTitle:{
    borderBottomWidth: 2,
    width: 130,
    paddingBottom: 3,
    borderColor: colors.green1,
    alignItems:'center'
  },
  instructionIdx:{
    color: colors.grey1
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: 'white'
  }
})
