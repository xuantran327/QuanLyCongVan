import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

import {styles} from '../../../styles';
import {ipAddress, getExtension} from '../../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const UpdateSlideScreen = props => {
  const [fileName, setFileName] = useState('');
  const [base64, setBase64] = useState('');
  const ImagePicker = require('react-native-image-picker');
  const handleChoosePhoto = () => {
    let options = {
      noData: true,
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      }
      if (response) {
        // console.log(Object.values(response)[0][0].fileName);
        setFileName(Object.values(response)[0][0].fileName);
        setBase64(Object.values(response)[0][0].base64);
        setUri(
          `data:image/${getExtension(
            Object.values(response)[0][0].fileName,
          )};base64,${Object.values(response)[0][0].base64}`,
        );
      }
    });
  };
  const handleUploadPhoto = (base64, fileName) => {
    fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/slide/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        base64: base64,
        fileName: fileName,
      }),
    })
      .then(res => res.json())
      .then(resData => {
        setFileName(fileName);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  const navigation = useNavigation();
  const IP_ADDRESS = ipAddress();
  const [data, setData] = useState([]);
  const [uri, setUri] = useState(
    `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/slide/slide-default.png`,
  );
  const [name, setName] = useState('');
  const option = Object.values(props)[1].params.option;
  const updateSlide = opt => {
    let url = '';
    if (!opt) {
      url = `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/slide/add`;
    } else {
      url = `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/slide/edit/${
        Object.values(props)[1].params.slideId
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
        imageLink: fileName,
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
          handleUploadPhoto(base64, fileName);
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
    const id = Object.values(props)[1].params.slideId;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/slide/${id}`, {
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
          setUri(
            `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/slide/${data.image}`,
          );
        });
    }, [IP_ADDRESS, id]);
  }
  return (
    <View style={[s.m4]}>
      <TouchableOpacity style={[s.mb4]} onPress={handleChoosePhoto}>
        <Image
          style={{
            width: '100%',
            height: 250,
          }}
          source={{
            uri: uri,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Tên slide..."
          placeholderTextColor="green"
          value={name}
          onChangeText={value => setName(value)}
        />
      </View>
      <TouchableOpacity
        style={[styles.loginBtn]}
        onPress={() => updateSlide(option)}>
        <Text style={styles.loginText}>Lưu thông tin</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UpdateSlideScreen;
