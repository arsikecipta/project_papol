import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {styles} from './../styles/styles';

export default function HelpScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{marginTop: -100}} 
                source={require('./../assets/logo.png')}></Image>

            <View>
            <Text style={styles.h1Text}>Cara Penggunaan Aplikasi</Text>
            <Text style={styles.subtext}>Klik dan tahan tombol dengan logo polisi
            untuk melakukan panggilan darurat. Setelah klik tombol, polisi akan
            mendapatkan panggilan darurat dari anda dan lokasi anda
            otomatis akan dikirimkan ke polisi</Text>

            <Text style={styles.subtext}>Klik dan tahan tombol dengan logo polisi
            untuk melakukan panggilan darurat. Setelah klik tombol, polisi akan
            mendapatkan panggilan darurat dari anda dan lokasi anda
            otomatis akan dikirimkan ke polisi</Text>

            <Text style={styles.subtext}>Klik dan tahan tombol dengan logo polisi
            untuk melakukan panggilan darurat. Setelah klik tombol, polisi akan
            mendapatkan panggilan darurat dari anda dan lokasi anda
            otomatis akan dikirimkan ke polisi</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Home')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Kembali Ke Menu</Text>
            </TouchableOpacity>
            </View>

            </View>
            

        </View>
    );
}