import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import AccountAvatar from '../../component/AccountAvatar';

import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons/faBriefcase';
import {faImage} from '@fortawesome/free-solid-svg-icons/faImage';
import {faHospital} from '@fortawesome/free-solid-svg-icons/faHospital';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faBookmark} from '@fortawesome/free-solid-svg-icons/faBookmark';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';

import {styles} from '../../../styles';
import {ipAddress} from '../../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const HomeScreen = props => {
  const IP_ADDRESS = ipAddress();
  const userId = Object.values(props)[1].params.userId;
  const roleId = Object.values(props)[1].params.roleId;
  const name = Object.values(props)[1].params.name;
  // console.log(userId);
  const navigation = useNavigation();
  let logOut = () => {};
  return (
    <View>
      <View style={[s.flexRow, s.justifyContentStart, s.m4]}>
        <FontAwesomeIcon
          icon={faUser}
          style={[s.mt1, s.mr4, s.ml1]}
          size="24"
        />
        <Text style={[s.fontWeightBold, styles.fontSize20]}>
          Xin chào, {name}!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AdminDispatchList')}
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
          <FontAwesomeIcon icon={faNewspaper} style={[s.mt1, s.mr3, s.ml1]} />
          <Text
            style={[s.fontWeightBold, styles.fontSize16, s.pr4, s.mb1, s.mr1]}>
            Công văn
          </Text>
        </View>
      </TouchableOpacity>
      {roleId == 1 ? (
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminIssuingAgencyList')}
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
              <FontAwesomeIcon
                icon={faHospital}
                style={[s.mt1, s.mr3, s.ml1]}
              />
              <Text
                style={[
                  s.fontWeightBold,
                  styles.fontSize16,
                  s.pr4,
                  s.mb1,
                  s.mr1,
                ]}>
                Cơ quan ban hành
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminDocumentFormList')}
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
              <FontAwesomeIcon
                icon={faBookmark}
                style={[s.mt1, s.mr3, s.ml1]}
              />
              <Text
                style={[
                  s.fontWeightBold,
                  styles.fontSize16,
                  s.pr4,
                  s.mb1,
                  s.mr1,
                ]}>
                Hình thức văn bản
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminFieldList')}
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
              <FontAwesomeIcon
                icon={faBriefcase}
                style={[s.mt1, s.mr3, s.ml1]}
              />
              <Text
                style={[
                  s.fontWeightBold,
                  styles.fontSize16,
                  s.pr4,
                  s.mb1,
                  s.mr1,
                ]}>
                Lĩnh vực
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminDocumentTypeList')}
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
              <FontAwesomeIcon icon={faList} style={[s.mt1, s.mr3, s.ml1]} />
              <Text
                style={[
                  s.fontWeightBold,
                  styles.fontSize16,
                  s.pr4,
                  s.mb1,
                  s.mr1,
                ]}>
                Loại văn bản
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminDispatchTypeList')}
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
                Loại hình công văn
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminSlideList')}
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
              <FontAwesomeIcon icon={faImage} style={[s.mt1, s.mr3, s.ml1]} />
              <Text
                style={[
                  s.fontWeightBold,
                  styles.fontSize16,
                  s.pr4,
                  s.mb1,
                  s.mr1,
                ]}>
                Slide
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default HomeScreen;
