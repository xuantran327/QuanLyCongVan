import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  Alert,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Dialog from 'react-native-dialog';

import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

import {ipAddress} from '../../../function';
import {styles} from '../../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const DocumentTypeList = props => {
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
  const [data, setData] = useState([]);
  const navigateDocumentTypeDetails = selectedId => {
    setSelectedId(selectedId);
    navigation.navigate('AdminUpdateDocumentType', {
      documentTypeId: selectedId,
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
      `http://${IP_ADDRESS}/QuanLyCongVan/public/api/document-type/delete/${id}`,
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
          fetchDocumentTypeList();
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
        <View style={[s.alignItemsCenter, s.px1]}>
          <Text style={[s.fontWeightBold, styles.fontSize16]}>{item.name}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', right: 12, bottom: 17}}
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
    </TouchableOpacity>
  );
  let url =
    props.search == '' || props.search == null
      ? `http://${IP_ADDRESS}/QuanLyCongVan/public/api/document-type/list/`
      : `http://${IP_ADDRESS}/QuanLyCongVan/public/api/document-type/search/${props.search}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDocumentTypeList = () => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  };
  useEffect(fetchDocumentTypeList, [url, isFocused]);
  useEffect(() => {
    if (refreshing) fetchDocumentTypeList();
  }, [fetchDocumentTypeList, refreshing]);
  const renderItem = ({item}) => {
    return (
      <Item item={item} onPress={() => navigateDocumentTypeDetails(item.id)} />
    );
  };
  return (
    <FlatList
      data={data}
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

export default DocumentTypeList;
