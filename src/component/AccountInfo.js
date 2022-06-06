import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';

import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';

import {styles} from '../../styles';
import {getDate, ipAddress, getExtension, getDateAlt} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const AccountInfo = props => {
  const IP_ADDRESS = ipAddress();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [radiobtn, setRadiobtn] = useState(['Nữ', 'Nam', 'Khác']);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [check, setCheck] = useState(0);
  const [fileName, setFileName] = useState('');
  const [base64, setBase64] = useState('');
  const [uri, setUri] = useState(
    `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/avatar/default-avatar.png`,
  );
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
    fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/upload-avatar`, {
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
  const editUser = () => {
    fetch(
      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/edit-user/${props.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          phoneNumber: phoneNumber,
          gender: check,
          avatarLink: fileName,
          dob: getDateAlt(date),
        }),
      },
    )
      .then(res => res.json())
      .then(resData => {
        Alert.alert('Thông báo', resData.message);
        handleUploadPhoto(base64, fileName);
        // console.log(fileName);
        // navigation.navigate('HomeContainer', {userId: props.id});
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  useEffect(() => {
    fetch(
      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/user/${props.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        let array = [];
        array.push(data);
        setData(array);
        setIsLoaded(true);
        setName(data.name);
        setPhoneNumber(data.phone_number);
        setText(getDate(data.dob));
        setFileName(data.avatar_link);
        setUri(
          `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/avatar/${data.avatar_link}`,
        );
        setCheck(data.gender);
      });
  }, [IP_ADDRESS, props.id, radiobtn]);
  if (!isLoaded) {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
              alignSelf: 'center',
              margin: 20,
              marginTop: 55,
            }}
            source={{
              uri: uri,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <SafeAreaView style={[s.mx4]}>
          <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
            Họ và tên
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.inputText]}
              placeholderTextColor="green"
            />
          </View>
          <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
            Ngày sinh
          </Text>
          <View style={[styles.inputView]}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={[styles.inputText]}
              placeholderTextColor="green"
            />
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{marginTop: -35, alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
            Giới tính
          </Text>
          <View style={[s.flexRow, s.justifyContentStart, s.row, s.ml1, s.mb4]}>
            {radiobtn &&
              radiobtn.map((data, key) => {
                return (
                  <View key={key} style={[s.col4]}>
                    {check == key ? (
                      <TouchableOpacity
                        style={[s.flexRow, s.justifyContentStart]}>
                        <Image
                          style={{width: 20, height: 20}}
                          source={{
                            uri: `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/selected.png`,
                          }}
                        />
                        <Text style={[s.ml2]}>{data}</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={[s.flexRow, s.justifyContentStart]}
                        onPress={() => {
                          setCheck(key);
                        }}>
                        <Image
                          style={{width: 20, height: 20}}
                          source={{
                            uri: `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/unselected.png`,
                          }}
                        />
                        <Text style={[s.ml2]}>{data}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
          </View>
          <Text style={[styles.fontSize16, s.mb2, s.fontWeightBold, s.ml2]}>
            Số điện thoại
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.inputText]}
              placeholderTextColor="green"
            />
          </View>
          <Text style={[styles.fontSize16, s.mb2, s.fontWeightBold, s.ml2]}>
            Email
          </Text>
          <View style={styles.inputView}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={[styles.inputText]}
              placeholderTextColor="green"
            />
          </View>
        </SafeAreaView>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 25,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            marginTop: 10,
            marginHorizontal: 90,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Lưu thông tin
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        {data &&
          data.map(item => (
            <View key={item.id}>
              <TouchableOpacity onPress={handleChoosePhoto}>
                <Image
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 80,
                    alignSelf: 'center',
                    margin: 20,
                    marginTop: 55,
                  }}
                  source={{
                    uri: uri,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <SafeAreaView style={[s.mx4]}>
                <Text
                  style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
                  Họ và tên
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={[styles.inputText]}
                    placeholder="Nhập nội dung..."
                    placeholderTextColor="green"
                    value={name}
                    onChangeText={value => setName(value)}
                  />
                </View>
                <Text
                  style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
                  Ngày sinh
                </Text>
                <View style={[styles.inputView]}>
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={[styles.inputText]}
                    placeholderTextColor="green"
                    value={text}
                    onChangeText={value => setText(value)}
                  />
                  <TouchableOpacity onPress={() => setShow(true)}>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{marginTop: -35, alignSelf: 'flex-end'}}
                    />
                  </TouchableOpacity>
                </View>
                {/* {show && ( */}
                <DatePicker
                  modal
                  open={show}
                  date={date}
                  onConfirm={date => {
                    setShow(false);
                    setDate(date);
                    console.log(date);
                    setText(getDate(date));
                  }}
                  onCancel={() => {
                    setShow(false);
                  }}
                  mode="date"
                  locale="vi"
                />
                {/* )} */}
                <Text
                  style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
                  Giới tính
                </Text>
                <View
                  style={[
                    s.flexRow,
                    s.justifyContentStart,
                    s.row,
                    s.ml1,
                    s.mb4,
                  ]}>
                  {radiobtn &&
                    radiobtn.map((data, key) => {
                      return (
                        <View key={key} style={[s.col4]}>
                          {check == key ? (
                            <TouchableOpacity
                              style={[s.flexRow, s.justifyContentStart]}>
                              <Image
                                style={{width: 20, height: 20}}
                                source={{
                                  uri: `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/selected.png`,
                                }}
                              />
                              <Text style={[s.ml2]}>{data}</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              style={[s.flexRow, s.justifyContentStart]}
                              onPress={() => {
                                setCheck(key);
                              }}>
                              <Image
                                style={{width: 20, height: 20}}
                                source={{
                                  uri: `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/unselected.png`,
                                }}
                              />
                              <Text style={[s.ml2]}>{data}</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      );
                    })}
                </View>
                <Text
                  style={[styles.fontSize16, s.mb2, s.fontWeightBold, s.ml2]}>
                  Số điện thoại
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={[styles.inputText]}
                    placeholder="Nhập nội dung..."
                    placeholderTextColor="green"
                    value={phoneNumber}
                    onChangeText={value => setPhoneNumber(value)}
                  />
                </View>
                <Text
                  style={[styles.fontSize16, s.mb2, s.fontWeightBold, s.ml2]}>
                  Email
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={[styles.inputText]}
                    placeholderTextColor="green"
                    value={item.email}
                  />
                </View>
              </SafeAreaView>
              <TouchableOpacity
                onPress={editUser}
                style={{
                  backgroundColor: 'green',
                  borderRadius: 25,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 30,
                  marginTop: 10,
                  marginHorizontal: 90,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  Lưu thông tin
                </Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  }
};
export default AccountInfo;
