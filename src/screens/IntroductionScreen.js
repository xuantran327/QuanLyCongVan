import * as React from 'react';
import {View, Text} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from '../../styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const IntroductionScreen = () => {
  return (
    <ScrollView style={[s.mx4]} showsVerticalScrollIndicator={false}>
      <View style={[s.my4]}>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
            marginVertical: 8,
          }}>
          Ứng dụng quản lý công văn (QLCV) là ứng dụng di động phục vụ nhu cầu
          xem và quản lý các văn bản, công văn của các công ty, văn phòng, cơ
          quan nhà nước. Ứng dụng tập trung vào việc xem, lưu trữ, quản lý các
          công văn cũng như các loại văn bản giấy tờ khác tại cơ quan một cách
          dễ dàng và hợp lý, từ đó giúp cho người lãnh đạo, người đứng đầu đơn
          vị ra các chỉ thị, các quyết định một cách nhanh chóng chuyển đến đúng
          đối tượng cần hướng tới và theo dõi được tình trạng của chỉ thị mình
          ban ra.
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
            marginVertical: 8,
          }}>
          Với ứng dụng QLCV, người dùng có thể xem danh sách các công văn, tìm
          kiếm và tải về công văn, tạo thuận lợi trong việc triển khai công văn
          đến các cơ quan, tổ chức có liên quan.
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
            marginTop: 16,
          }}>
          Ứng dụng QLCV có các chức năng chính:
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
          }}>
          - Xem danh sách các công văn
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
          }}>
          - Tìm kiếm công văn theo từ khoá
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
          }}>
          - Xem nội dung chi tiết của công văn
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
            marginBottom: 16,
          }}>
          - Tải về công văn
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'black',
            fontSize: 16,
            marginVertical: 8,
          }}>
          Nếu gặp khó khăn trong quá trình cài đặt hay sử dụng ứng dụng QLCV,
          vui lòng liên hệ 0987654321 để được hỗ trợ.
        </Text>
      </View>
    </ScrollView>
  );
};
export default IntroductionScreen;
