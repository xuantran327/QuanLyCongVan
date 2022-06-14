import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FAB} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd';

import {styles} from '../../../styles';
import DispatchTypeList from '../../component/admin/DispatchTypeList';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const DispatchTypeListScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  return (
    <View style={{width: '100%', height: '100%'}}>
      <SearchBar
        placeholder="Tìm loại hình công văn..."
        onChangeText={value => setSearch(value)}
        value={search}
        searchIcon={
          <FontAwesomeIcon
            icon={faSearch}
            size={20}
            style={{marginLeft: 5, marginTop: -3}}
          />
        }
        clearIcon={
          <FontAwesomeIcon
            icon={faClose}
            size={20}
            style={{marginRight: 5, marginTop: -3}}
          />
        }
        inputContainerStyle={[s.bgLight, styles.height40, s.roundedPill, s.pt1]}
        containerStyle={{
          backgroundColor: 'green',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
        }}
        lightTheme={true}
        round={true}
      />
      <DispatchTypeList search={search} />
      <FAB
        onPress={() =>
          navigation.navigate('AdminUpdateDispatchType', {option: false})
        }
        title={<FontAwesomeIcon icon={faAdd} style={{color: 'white'}} />}
        color="green"
        placement="left"
        style={{position: 'absolute', bottom: 60}}
      />
      <FAB
        onPress={() => navigation.goBack()}
        title={
          <FontAwesomeIcon icon={faChevronLeft} style={{color: 'white'}} />
        }
        color="green"
        placement="left"
      />
    </View>
  );
};
export default DispatchTypeListScreen;
