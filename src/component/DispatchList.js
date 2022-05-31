import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faPenAlt} from '@fortawesome/free-solid-svg-icons/faPenAlt';
import {getDateTime} from '../../function';
import {getDate} from '../../function';

import {styles} from '../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const DispatchList = props => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [dispatch, setDispatch] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigateDispatchDetails = selectedId => {
    setSelectedId(selectedId);
    navigation.navigate('Chi tiết công văn', {dispatchId: selectedId});
  };
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        s.p3,
        s.mx3,
        s.my2,
        s.bgWhite,
        s.flexRow,
        s.justifyContentStart,
        s.roundedLg,
      ]}>
      <View>
        <View style={[s.flexRow, s.justifyContentStart, s.alignItemsCenter]}>
          <Image
            resizeMode="cover"
            style={{
              width: '30%',
              height: undefined,
              aspectRatio: 4 / 3,
            }}
            source={{
              uri:
                'http://192.168.1.16:8080/QuanLyCongVan/public/image/thumbnail/' +
                item.thumbnail,
            }}
          />
          <View style={{marginLeft: 10, width: '70%'}}>
            <Text
              style={[
                s.fontWeightBold,
                styles.fontSize16,
                styles.textAlignJustify,
                s.pr4,
                s.mb1,
                s.mr1,
              ]}>
              {item.trich_yeu_noi_dung}
            </Text>
            <Text style={[s.mt1]}>Ngày ký: {getDate(item.ngay_ky)}</Text>
            <Text style={[s.mt1]}>
              Cập nhật: {getDateTime(item.updated_at)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  let url =
    props.search == '' || props.search == null
      ? 'http://192.168.1.16:8080/QuanLyCongVan/public/api/dispatch-list/'
      : 'http://192.168.1.16:8080/QuanLyCongVan/public/api/dispatch-list/' +
        props.search;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(dispatch => {
        setDispatch(dispatch);
        console.log(dispatch);
        setIsLoaded(true);
      });
  }, [url]);
  const renderItem = ({item}) => {
    return (
      <Item item={item} onPress={() => navigateDispatchDetails(item.id)} />
    );
  };
  return (
    <FlatList
      data={dispatch}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
      style={[s.mt2]}
      showsVerticalScrollIndicator={false}
    />
    // </SafeAreaView>
  );
};

export default DispatchList;
