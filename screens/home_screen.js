import 'react-native-gesture-handler';
import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
    Button,
    StatusBar,
} from 'react-native';
import { styles } from './../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen()
{
    const navigation = useNavigation();
    return(
        <View style={styles.container} >
            <StatusBar 
                backgroundColor= "#173248"
                hidden={true}/>
            <Image style={{marginTop: -100}}
                source={require('./../assets/logo.png')}></Image>

            <TouchableOpacity style={{marginBottom: 50,}}
            onPress={() => navigation.navigate('Maps')}>
                <Image 
                source={require('./../assets/police.png')}></Image>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginBottom: 60}} >
                <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                    <Image 
                    source={require('./../assets/damkar.png')}
                    style={{marginHorizontal: 30}}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Maps')}>
                    <Image 
                    source={require('./../assets/ambulance.png')}
                    style={{marginHorizontal: 30}}></Image>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{borderColor: 'white', borderRadius: 8,
                borderWidth: 1, width: 100, height: 30, justifyContent: 'center'}} 
                onPress={() => navigation.navigate('Help')}>
                <Text style= {{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Bantuan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 40}} 
            onPress={() => navigation.navigate('Profile')}>
                <Text style= {{textDecorationLine: 'underline', color: 'white', fontWeight: 'bold'}}>Akun Anda</Text>
            </TouchableOpacity>
        </View>
    );
}