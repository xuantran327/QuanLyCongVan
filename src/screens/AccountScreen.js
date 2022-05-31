import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import AccountAvatar from '../component/AccountAvatar';

import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import {faContactBook} from '@fortawesome/free-solid-svg-icons/faContactBook';
import {faSync} from '@fortawesome/free-solid-svg-icons/faSync';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {styles} from '../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const AccountScreen = props => {
  const navigation = useNavigation();
  let logOut = () => {
    fetch('http://192.168.1.16:8080/QuanLyCongVan/public/api/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        Alert.alert('Thông báo', resData.message);
        if (resData.status == 200) {
          navigation.navigate('Login');
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  return (
    <View>
      <AccountAvatar />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Thông tin cá nhân')}
        style={[
          s.p3,
          s.mx3,
          s.my1,
          s.bgWhite,
          s.flexRow,
          s.justifyContentStart,
          s.roundedLg,
        ]}>
        <View style={[s.flexRow, s.justifyContentBetween]}>
          <FontAwesomeIcon icon={faUser} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Thông tin cá nhân
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Giới thiệu')}
        style={[
          s.p3,
          s.mx3,
          s.my1,
          s.bgWhite,
          s.flexRow,
          s.justifyContentStart,
          s.roundedLg,
        ]}>
        <View style={[s.flexRow, s.justifyContentBetween]}>
          <FontAwesomeIcon icon={faInfoCircle} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Giới thiệu
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Liên hệ')}
        style={[
          s.p3,
          s.mx3,
          s.my1,
          s.bgWhite,
          s.flexRow,
          s.justifyContentStart,
          s.roundedLg,
        ]}>
        <View style={[s.flexRow, s.justifyContentBetween]}>
          <FontAwesomeIcon icon={faContactBook} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Liên hệ
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          s.p3,
          s.mx3,
          s.my1,
          s.bgWhite,
          s.flexRow,
          s.justifyContentStart,
          s.roundedLg,
        ]}>
        <View style={[s.flexRow, s.justifyContentBetween]}>
          <FontAwesomeIcon icon={faSync} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Cài đặt
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={logOut}
        style={[
          s.p3,
          s.mx3,
          s.my1,
          s.bgWhite,
          s.flexRow,
          s.justifyContentStart,
          s.roundedLg,
        ]}>
        <View style={[s.flexRow, s.justifyContentBetween]}>
          <FontAwesomeIcon icon={faLock} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Đăng xuất
          </Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[
          s.p3,
          s.mx3,
          s.my1,
          s.bgWhite,
          s.flexRow,
          s.justifyContentStart,
          s.roundedLg,
        ]}>
        <View style={[s.flexRow, s.justifyContentBetween]}>
          <FontAwesomeIcon icon={faLock} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Đăng nhập
          </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
export default AccountScreen;
