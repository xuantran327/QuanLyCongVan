import * as React from 'react';
import {View, Text} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

import {styles} from '../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const ContactScreen = () => {
  return (
    <View style={[s.my5, s.mx4, s.px2]}>
      <Text
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 18,
          marginVertical: 4,
          fontWeight: 'bold',
        }}>
        Email:
      </Text>
      <Text
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 18,
          marginVertical: 4,
        }}>
        rapunzelxuantran@gmail.com
      </Text>
      <Text
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 18,
          marginVertical: 4,
          fontWeight: 'bold',
        }}>
        Số điện thoại:
      </Text>
      <Text
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 18,
          marginVertical: 4,
        }}>
        0987654321
      </Text>
      <Text
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 18,
          marginVertical: 4,
          fontWeight: 'bold',
        }}>
        Địa chỉ:
      </Text>
      <Text
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 18,
          marginVertical: 4,
        }}>
        Trường Đại học Công nghệ thông tin và Truyền thông Việt Hàn, 470 Trần
        Đại Nghĩa, p. Hoà Quý, q. Ngũ Hành Sơn, TP Đà Nẵng
      </Text>
    </View>
  );
};
export default ContactScreen;
