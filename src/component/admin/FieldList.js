import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

import {ipAddress} from '../../../function';

import {styles} from '../../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const FieldList = props => {
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
  const navigateFieldDetails = selectedId => {
    setSelectedId(selectedId);
    navigation.navigate('AdminUpdateField', {
      fieldId: selectedId,
      option: true,
    });
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
    </TouchableOpacity>
  );
  let url =
    props.search == '' || props.search == null
      ? `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/field/list/`
      : `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/field/search/${props.search}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchFieldList = () => {
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
  useEffect(fetchFieldList, [url, isFocused]);
  useEffect(() => {
    if (refreshing) fetchFieldList();
  }, [fetchFieldList, refreshing]);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => navigateFieldDetails(item.id)} />;
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

export default FieldList;
