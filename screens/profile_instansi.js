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

export default function ProfileInstansi() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <View style={{marginTop: -100, marginBottom: 20,
              justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('./../assets/building.png')}
              style={{width: 100, height: 100, marginTop: 100, marginBottom: 25,
              }}/>
          </View>

          <View>
            <Text style={styles.h1Text}>Nama Instansi</Text>
            <TextInput placeholderTextColor="white" style={styles.inputbox2} placeholder="Polrestabes Bandung"
              editable={false}></TextInput>

            <Text style={styles.h1Text}>Lokasi Instansi</Text>
            <TextInput placeholderTextColor="white" style={styles.inputbox2} placeholder="Jl. Bhayangkara No.1, Soreang" 
              editable={false}></TextInput>

            <Text style={styles.h1Text}>Identitas Instansi</Text>
            <TextInput placeholderTextColor="white" style={styles.inputbox2} placeholder="12344121134141" 
              editable={false}></TextInput>

            <Text style={styles.h1Text} >Password</Text>
            <View style={{flexDirection:"row", justifyContent:'center'}}>
              <TextInput placeholderTextColor="white" style={styles.inputbox2} placeholder="****************" 
              editable={false}>
              </TextInput>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Change Password')}>
              <Text style={{color: 'white', marginLeft: 250,
                    marginTop: 10, fontWeight: 'bold'}}>Ubah Password</Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.loginbutton}
          onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Logout</Text>
          </TouchableOpacity>
            
          </View>
        </View>
    );
}