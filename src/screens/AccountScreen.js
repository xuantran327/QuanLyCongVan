import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  RefreshControl,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import AccountAvatar from '../component/AccountAvatar';

import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import {faContactBook} from '@fortawesome/free-solid-svg-icons/faContactBook';
import {faSync} from '@fortawesome/free-solid-svg-icons/faSync';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {styles} from '../../styles';
import {ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const AccountScreen = props => {
  const IP_ADDRESS = ipAddress();
  const userId = Object.values(props)[1].params.userId;
  const roleId = Object.values(props)[1].params.roleId;
  const name = Object.values(props)[1].params.name;
  // console.log(userId);
  const navigation = useNavigation();
  let logOut = () => {
    fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/logout`, {
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
  const [refreshing, setRefreshing] = React.useState(false);
  // console.log(refreshing);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <AccountAvatar id={userId} refreshing={refreshing} />
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Thông tin cá nhân', {userId: userId})
        }
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
      {roleId <= 2 ? (
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('AdminHome', {
              userId: userId,
              roleId: roleId,
              name: name,
            })
          }
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
            <FontAwesomeIcon icon={faFile} style={[s.mt1, s.mr3, s.ml1]} />
            <Text
              style={[
                s.fontWeightBold,
                styles.fontSize16,
                s.pr4,
                s.mb1,
                s.mr1,
              ]}>
              Quản lý công văn
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}

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
    </ScrollView>
  );
};
export default AccountScreen;
