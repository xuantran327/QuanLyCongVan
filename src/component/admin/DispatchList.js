import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  RefreshControl,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Dialog from 'react-native-dialog';

import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

import {getDate} from '../../../function';
import {ipAddress} from '../../../function';

import {styles} from '../../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const DispatchList = props => {
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const IP_ADDRESS = ipAddress();
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [dispatch, setDispatch] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigateDispatchDetails = selectedId => {
    setSelectedId(selectedId);
    navigation.navigate('AdminUpdateDispatch', {
      dispatchId: selectedId,
      option: true,
    });
  };
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(1);
  const showDialog = selectedId => {
    setId(selectedId);
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    fetch(
      `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch/delete/${id}`,
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
        Alert.alert('Thông báo', data.message);
        if (data.status == 200) {
          fetchDispatchList();
        }
      });
    setVisible(false);
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
                `http://${IP_ADDRESS}/QuanLyCongVan/public/image/thumbnail/` +
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
            <Text style={[s.mt1]}>Cập nhật: {getDate(item.updated_at)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: 12, bottom: 5}}
          onPress={() => showDialog(item.id)}>
          <FontAwesomeIcon icon={faTrash} style={[s.alighSelfEnd]} />
        </TouchableOpacity>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Thông báo</Dialog.Title>
          <Dialog.Description>
            Bạn thật sự muốn xoá danh mục này?
          </Dialog.Description>
          <Dialog.Button label="Huỷ" onPress={handleCancel} />
          <Dialog.Button label="Xoá" onPress={() => handleDelete(id)} />
        </Dialog.Container>
      </View>
    </TouchableOpacity>
  );
  let url =
    props.search == '' || props.search == null
      ? `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch-list/`
      : `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch-list/` +
        props.search;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDispatchList = () => {
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
        // console.log(dispatch);
        setIsLoaded(true);
      });
  };
  useEffect(fetchDispatchList, [url, isFocused]);
  useEffect(() => {
    if (refreshing) fetchDispatchList();
  }, [fetchDispatchList, refreshing]);
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default DispatchList;
