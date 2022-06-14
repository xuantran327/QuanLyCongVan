import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

import {styles} from '../../styles';
import {ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const ForgotPasswordScreen = () => {
  const IP_ADDRESS = ipAddress();
  const [email, setEmail] = useState();
  let emailCheck = () => {
    fetch(
      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({email: email}),
      },
    )
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        Alert.alert('Thông báo', resData.message);
        // if (resData.status == 200) {
        //   navigation.navigate('HomeContainer', {userId: resData.userId});
        //   // navigation.navigate('HomeContainer');
        // }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  return (
    <View style={[s.my5, s.mx4, s.px2]}>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Email..."
          placeholderTextColor="green"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <TouchableOpacity style={[styles.loginBtn]} onPress={emailCheck}>
        <Text style={styles.loginText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgotPasswordScreen;
