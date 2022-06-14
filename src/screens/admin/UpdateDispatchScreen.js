/* import React, {useState} from 'react';
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

import {styles} from '../../../styles';
import {getDate, ipAddress} from '../../../function';
import {ScrollView} from 'react-native-gesture-handler';
import AccountInfo from '../../component/AccountInfo';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const UpdateDispatchScreen = props => {
  const userId = Object.values(props)[1].params.userId;
  const IP_ADDRESS = ipAddress();
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
      <AccountInfo id={userId} />
    </ScrollView>
  );
};
export default UpdateDispatchScreen; */

import * as React from 'react';
import {View, Text, Image} from 'react-native';

const UpdateDispatchScreen = props => {
  const option = Object.values(props)[1].params.option;
  console.log(option);
  if (option === 'Edit') {
    console.log(Object.values(props)[1].params.dispatchId);
  } else {
    console.log('Undefined');
  }
  //   const userId = Object.values(props)[1].params.dispatchId;
  //   console.log(userId);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../../img/launcher-icon.png')}
        resizeMode="contain"
      />
    </View>
  );
};
export default UpdateDispatchScreen;
