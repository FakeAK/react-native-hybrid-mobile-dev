import React, { useState, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Keyboard,
  Button,
  TextInput
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import DropdownAlert from 'react-native-dropdownalert';
import Request from './api/Request';
import { API } from './api/api';
import { IS_IOS } from './common/const';

export default function Login() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var dropDownAlertRef;

  _loginButtonPressed = async () => {
    if (email === '' || password === '') {
      dropDownAlertRef.alertWithType('error', 'Erreur', 'Les identifiants doivent être correct.');
      return ;
    }

    const parameters = {
      email: email,
      password: password
    };

    try {
      const req = await Request.post().to(API.AUTH.LOGIN).payload(parameters).send();

      dropDownAlertRef.alertWithType('success', 'Success', 'Succesfully logged in.');
      // RECEIVE NOTIF
      if (!IS_IOS) {
        navigate('Map');
      }
    } catch (err) {
      dropDownAlertRef.alertWithType('error', 'Erreur', err.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
            <View style={{ alignItems: 'center' }}>
              <TextInput onChangeText={(text) => setEmail(text)} placeholder='Email' placeholderTextColor='#FFFFFF' keyboardType='email-address' style={{ width:'80%', borderBottomColor: '#FFF', borderBottomWidth: 1, marginTop: 30 }} />
              <TextInput onChangeText={(text) => setPassword(text)} placeholder='Mot de passe' placeholderTextColor='#FFFFFF' secureTextEntry={true} style={{ width: '80%', borderBottomColor: '#FFF', borderBottomWidth: 1, marginTop: 30 }} />
              <Button title='Se connecter' onPress={_loginButtonPressed} style={{ marginTop: 30 }} />
            </View>
            <DropdownAlert ref={ref => dropDownAlertRef = ref} />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

});