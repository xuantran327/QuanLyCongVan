import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '../../styles';
import {ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const AccountAvatar = props => {
  const IP_ADDRESS = ipAddress();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/user/` + props.id,
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
        let array = [];
        array.push(data);
        setData(array);
        setIsLoaded(true);
        // console.log(array);
      });
  }, [IP_ADDRESS, props.id]);
  if (!isLoaded) {
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
          <Text style={[s.fontWeightBold, styles.fontSize20]}>Đang tải...</Text>
          <Text style={[styles.fontSize16, s.mt1]}>Đang tải...</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        {data &&
          data.map(item => (
            <View
              key={item.id}
              style={[s.flexRow, s.justifyContentStart, s.m3]}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                }}
                source={{
                  uri: `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/avatar/${item.avatar_link}`,
                }}
                resizeMode="contain"
              />
              <View style={[s.justifyContentCenter, s.ml3]}>
                <Text style={[s.fontWeightBold, styles.fontSize20]}>
                  {item.name}
                </Text>
                <Text style={[styles.fontSize16, s.mt1]}>{item.email}</Text>
              </View>
            </View>
          ))}
      </View>
    );
  }
};
export default AccountAvatar;