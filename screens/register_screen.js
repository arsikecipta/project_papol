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

export default function RegisterScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#173248'}}>
            <View style={{alignItems: 'center', marginTop: -40, marginBottom: -65}}>
                <Image 
                    source={require('./../assets/logo.png')}></Image>
            </View>
            
            <Text style={styles.h1Text}>NIK</Text>
            <TextInput placeholderTextColor="#C6C6C6" style={styles.inputbox2} placeholder="Masukan Nama"></TextInput>
            <Text style={styles.h1Text}>Nama Lengkap</Text>
            <TextInput placeholderTextColor="#C6C6C6" style={styles.inputbox2} placeholder="Masukan Nama"></TextInput>
            <Text style={styles.h1Text}>No. Telepon</Text>
            <TextInput placeholderTextColor="#C6C6C6" style={styles.inputbox2} placeholder="Masukan Nama"></TextInput>
            <Text style={styles.h1Text}>Password</Text>
            <TextInput placeholderTextColor="#C6C6C6" style={styles.inputbox2} placeholder="Masukan Nama"></TextInput>
            <Text style={styles.h1Text}>Konfirmasi Password</Text>
            <TextInput placeholderTextColor="#C6C6C6" style={styles.inputbox2} placeholder="Masukan Nama"></TextInput>

            <TouchableOpacity style={styles.loginbutton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Daftar</Text>
            </TouchableOpacity>

            <View style={{marginTop: 40}}></View>
        </ScrollView>
    );
}