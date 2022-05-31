import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const AccountAvatar = () => {
  const [dispatch, setDispatch] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch('http://192.168.1.16:8080/QuanLyCongVan/public/api/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(dispatch => {
        // setDispatch(dispatch);
        console.log(dispatch);
        setIsLoaded(true);
      });
  }, []);
  return (
    <View style={[s.flexRow, s.justifyContentStart, s.m3]}>
      <Image
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}
        source={require('../../img/default-avatar.png')}
        resizeMode="contain"
      />
      <View style={[s.justifyContentCenter, s.ml3]}>
        <Text style={[s.fontWeightBold, styles.fontSize20]}>
          Trần Thị Xuân Xuân
        </Text>
        <Text style={[styles.fontSize16, s.mt1]}>
          rapunzelxuantran@gmail.com
        </Text>
      </View>
    </View>
  );
};
export default AccountAvatar;
