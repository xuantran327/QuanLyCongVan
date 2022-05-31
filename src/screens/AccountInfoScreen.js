import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  SafeAreaView,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DateTimePicker from '@react-native-community/datetimepicker';

import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';

import {styles} from '../../styles';
import {getDate} from '../../function';
import {ScrollView} from 'react-native-gesture-handler';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const AccountInfoScreen = () => {
  const [radiobtn, setRadiobtn] = useState(['Nữ', 'Nam', 'Khác']);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState('27/03/2002');
  const onChange = (event, selectedDate) => {
    // console.log(text);
    // setShow(true);
    setDate(selectedDate);
    console.log(selectedDate);
    // let tempDate = new Date(currentDate);
    // setText(getDate(tempDate));
    // console.log(text);
    setText(getDate(selectedDate));
    if (Platform.OS === 'ios') {
      setShow(false);
    }
  };
  const showPicker = () => {
    setShow(true);
  };
  const [check, setCheck] = useState(0);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => console.log(2)}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: 'center',
            margin: 20,
            marginTop: 35,
          }}
          source={{
            uri: 'http://192.168.1.16:8080/QuanLyCongVan/public/image/avatar/default-avatar.png',
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <SafeAreaView style={[s.mx4]}>
        <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
          Họ và tên
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Nhập nội dung..."
            placeholderTextColor="green"
            value="Trần Thị Xuân Xuân"
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
            value={text}
            onChangeText={value => setText(value)}
          />
          <TouchableOpacity onPress={showPicker}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{marginTop: -35, alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            display="spinner"
            onchange={onChange}
          />
        )}
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
                          uri: 'http://192.168.1.16:8080/QuanLyCongVan/public/image/selected.png',
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
                          uri: 'http://192.168.1.16:8080/QuanLyCongVan/public/image/unselected.png',
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
            placeholder="Nhập nội dung..."
            placeholderTextColor="green"
            value="0987654321"
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
            placeholder="Nhập nội dung..."
            placeholderTextColor="green"
            value="rapunzelxuantran@gmail.com"
          />
        </View>
      </SafeAreaView>
      <TouchableOpacity
        // onPress={checkPermission}
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
    </ScrollView>
  );
};
export default AccountInfoScreen;
