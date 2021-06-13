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

export default function ProfileScreen() {
    const navigation = useNavigation();
    return (
      <View style={{flex: 1, backgroundColor: '#173248'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./../assets/user.png')}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100 / 2,
              marginTop: 45, marginBottom: 10}}/>

        </View>
        <Text style={styles.textinputnocolor} >Nama Lengkap</Text>
        <TextInput placeholderTextColor='white' placeholder="Lalu Muh. Andre"
          editable={false} style={styles.inputtextnocolor} ></TextInput>

        <Text style={styles.textinputnocolor} >No. Telepon</Text>
        <TextInput placeholderTextColor='white' placeholder="081545236587"
          editable={false} style={styles.inputtextnocolor} ></TextInput>

        <Text style={styles.textinputnocolor} >NIK</Text>
        <TextInput placeholderTextColor='white' placeholder="12331241102091"
          editable={false} style={styles.inputtextnocolor} ></TextInput>

        <Text style={styles.textinputnocolor} >Password</Text>
        <TextInput placeholderTextColor='white' placeholder="******************"
          editable={false} style={styles.inputtextnocolor} ></TextInput>
        
        <TouchableOpacity onPress={() => navigation.navigate('Change Password')}>
          <Text style={{color: 'white', marginLeft: 260, marginTop: 10,
            fontWeight: 'bold'}} >Ubah Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginbutton}
          onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Logout</Text>
        </TouchableOpacity>
    
      </View>
    );
}