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

export default function ChangePassword() {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1,
            justifyContent: 'center',
            backgroundColor: '#173248'}}>

            <Image style={{marginTop: -5, marginBottom: 60,
                marginHorizontal: 160, height: 70, width: 70}}
                source={require('./../assets/key.png')}></Image>

            <Text style={styles.textinputnocolor} >Password Saat Ini</Text>
            <TextInput placeholderTextColor='white'
                style={styles.inputtextnocolor} ></TextInput>
            
            <Text style={styles.textinputnocolor} placeholderTextColor='white'>Password Baru</Text>
            <TextInput placeholderTextColor='white'
                style={styles.inputtextnocolor} ></TextInput>
            
            <Text style={styles.textinputnocolor} >Konfirmasi Password</Text>
            <TextInput placeholderTextColor='white'
                style={styles.inputtextnocolor} ></TextInput>

            <TouchableOpacity style={styles.changebutton} 
                onPress={() => navigation.navigate('Home')} >
                <Text style={{color: 'white', fontWeight: 'bold'}} >Ubah</Text>
            </TouchableOpacity>
        </View>
    );
}