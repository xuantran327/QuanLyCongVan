import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {useNavigation} from '@react-navigation/native';
// import moment from 'moment';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {styles} from '../../styles';
import {getDateTime, ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const NewDispatch = () => {
  const IP_ADDRESS = ipAddress();
  const navigation = useNavigation();
  const [dispatch, setDispatch] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const moveToDispatchDetails = id => {
    navigation.navigate('Chi tiết công văn', {dispatchId: id});
  };
  useEffect(() => {
    fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/new-dispatch`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(dispatch => {
        setDispatch(dispatch);
        // console.log(dispatch.length);
        setIsLoaded(true);
      });
  }, [IP_ADDRESS]);
  if (!isLoaded) {
    return (
      <View>
        <Text style={[styles.fontSize16, s.alignSelfCenter, s.my2]}>
          Đang tải các công văn mới
        </Text>
      </View>
    );
  } else if (dispatch.length == 0) {
    return (
      <View>
        <Text style={[styles.fontSize16, s.alignSelfCenter, s.my2]}>
          Hiện tại chưa có công văn mới
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        {dispatch &&
          dispatch.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => moveToDispatchDetails(item.id)}
              style={[s.my3]}>
              <Image
                resizeMode="cover"
                style={{width: '100%', height: 200}}
                source={{
                  uri:
                    `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/thumbnail/` +
                    item.thumbnail,
                }}
              />
              <Text
                style={[
                  s.fontWeightBold,
                  styles.fontSize20,
                  styles.textAlignJustify,
                  s.mt3,
                  s.mb2,
                ]}>
                {item.trich_yeu_noi_dung}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <FontAwesomeIcon icon={faCalendarAlt} style={[s.mr1]} />
                <Text>- {getDateTime(item.updated_at)}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    );
  }
};
export default NewDispatch;
