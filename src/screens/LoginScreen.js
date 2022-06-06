import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {Card} from 'react-native-elements';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const showAlert = str => Alert.alert('Thông báo', str);

const LoginScreen = () => {
  const IP_ADDRESS = ipAddress();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let loginCheck = () => {
    fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({email: email, password: password}),
    })
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        showAlert(resData.message);
        if (resData.status == 200) {
          navigation.navigate('HomeContainer', {userId: resData.userId});
          // navigation.navigate('HomeContainer');
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  return (
    <View style={[styles.container, s.px4]}>
      <Card.Title
        style={[
          styles.fontSize45,
          styles.textGreen,
          s.fontWeightBold,
          s.textCenter,
          s.mb4,
          s.mt1,
        ]}>
        ĐĂNG NHẬP
      </Card.Title>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="E-mail..."
          placeholderTextColor="green"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={[styles.inputText]}
          placeholder="Password..."
          placeholderTextColor="green"
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity style={[styles.loginBtn]} onPress={loginCheck}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
