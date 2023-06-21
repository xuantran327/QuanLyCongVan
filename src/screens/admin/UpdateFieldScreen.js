import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../../styles';
import {ipAddress} from '../../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const UpdateFieldScreen = props => {
  const navigation = useNavigation();
  const IP_ADDRESS = ipAddress();
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const option = Object.values(props)[1].params.option;
  const updateField = opt => {
    let url = '';
    if (!opt) {
      url = `http://${IP_ADDRESS}/QuanLyCongVan/public/api/field/add`;
    } else {
      url = `http://${IP_ADDRESS}/QuanLyCongVan/public/api/field/edit/${
        Object.values(props)[1].params.fieldId
      }`;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.errors) {
          let errorArray = Object.values(resData.errors);
          let errorString = '';
          for (let key in errorArray) {
            errorString += errorArray[key][0];
            if (key != errorArray.length) {
              errorString += '\n';
            }
          }
          Alert.alert('Thông báo', errorString);
        } else {
          Alert.alert('Thông báo', resData.message);
          if (!option) {
            navigation.goBack();
          }
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  if (option) {
    const id = Object.values(props)[1].params.fieldId;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(`http://${IP_ADDRESS}/QuanLyCongVan/public/api/field/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          let array = [];
          array.push(data);
          setData(array);
          setName(data.name);
        });
    }, [IP_ADDRESS, id]);
  }
  return (
    <View style={[s.m4]}>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Lĩnh vực..."
          placeholderTextColor="green"
          value={name}
          onChangeText={value => setName(value)}
        />
      </View>
      <TouchableOpacity
        style={[styles.loginBtn]}
        onPress={() => updateField(option)}>
        <Text style={styles.loginText}>Lưu thông tin</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UpdateFieldScreen;
